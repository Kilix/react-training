const formatNumberToString = number => Number(number).toLocaleString();

const getSimilarArtistsNames = similarArtists =>
    similarArtists.artist.map(artist => artist.name).join(', ');

const sortArtistsByPlayCount = (firstArtist, secondArtist) =>
    secondArtist.playcount - firstArtist.playcount;

const getArtistsList = (artistsList, sorted, search, favorites) => {
    const sortedArtists = sorted ? [...artistsList].sort(sortArtistsByPlayCount) : artistsList;
    const filteredBySearch = search
        ? // case insensitive
          sortedArtists.filter(artist => artist.name.toUpperCase().includes(search.toUpperCase()))
        : sortedArtists;

    const filtered = favorites
        ? filteredBySearch.filter(artist => favorites.includes(artist.name))
        : filteredBySearch;
    return filtered;
};

export {formatNumberToString, getArtistsList, getSimilarArtistsNames};
