const getArtistsMap = state => state.artistsMap;
const getSelectedArtistName = state => state.selectedArtistName;

const getArtistByName = (state, artistName) => {
    const artistsMap = getArtistsMap(state);
    return artistsMap ? artistsMap[artistName] : null;
};

const getSelectedArtist = state => {
    const selectedArtistName = getSelectedArtistName(state);
    return selectedArtistName ? getArtistByName(state, selectedArtistName) : null;
};

const getTopArtistsWithInfo = state =>
    state.topArtists.map(artistName => getArtistByName(state, artistName));

export {getArtistByName, getSelectedArtist, getSelectedArtistName, getTopArtistsWithInfo};
