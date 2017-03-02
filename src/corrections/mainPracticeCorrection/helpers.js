const formatNumberToString = (number) => Number(number).toLocaleString();

const hasTag = (musicStyle, tags) => tags.tag.find(tag => tag.name === musicStyle);

const getSimilarArtistsNames = similarArtists =>
    similarArtists.artist.map(artist => artist.name).join(', ');

const sortArtistsByPlayCount = (firstArtist, secondArtist) =>
    secondArtist.playcount - firstArtist.playcount;

export {
    formatNumberToString,
    getSimilarArtistsNames,
    hasTag,
    sortArtistsByPlayCount,
};
