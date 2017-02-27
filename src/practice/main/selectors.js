import {createSelector} from 'reselect';

const getArtistsMap = (state) => state.artistsMap;
const getSelectedArtistName = (state) => state.selectedArtistName;

const getArtistGetter = (state) => (artistName) => createSelector(
    [getArtistsMap],
    (artistsMap) => artistsMap ? artistsMap[artistName] : null,
)(state);

const getSelectedArtist = (state) => createSelector(
    [getSelectedArtistName],
    (artistName) => artistName ? getArtistGetter(state)(artistName) : null,
)(state);

const getArtistByName = (state, artistName) => getArtistGetter(state)(artistName);

const getTopArtistsWithInfo = state =>
    state.topArtists.map(artistName => getArtistByName(state, artistName));

export {
    getArtistByName,
    getSelectedArtist,
    getSelectedArtistName,
    getTopArtistsWithInfo,
};
