import {getTopArtistsPromise, getArtistInfoPromise} from './libs/actionsHelpers';
import {normalizeArtist, normalizeTopArtists} from './schemas';

export const GET_TOP_ARTISTS_PENDING = 'GET_TOP_ARTISTS_PENDING';
export const GET_TOP_ARTISTS_SUCCESS = 'GET_TOP_ARTISTS_SUCCESS';
export const GET_TOP_ARTISTS_ERROR = 'GET_TOP_ARTISTS_ERROR';
const getTopArtists = () => ({
    type: 'GET_TOP_ARTISTS',
    payload: {
        promise: getTopArtistsPromise().then(normalizeTopArtists),
    },
});

export const OPEN_ARTIST_CARD = 'OPEN_ARTIST_CARD';
const openArtistCard = (artistName = null) => ({
    type: 'OPEN_ARTIST_CARD',
    payload: {artistName},
});

export const GET_ARTIST_INFO_PENDING = 'GET_ARTIST_INFO_PENDING';
export const GET_ARTIST_INFO_SUCCESS = 'GET_ARTIST_INFO_SUCCESS';
export const GET_ARTIST_INFO_ERROR = 'GET_ARTIST_INFO_ERROR';
const getArtistInfo = (artistName) => ({
    type: 'GET_ARTIST_INFO',
    payload: {
        promise: getArtistInfoPromise(artistName).then(normalizeArtist),
    },
});

export {
    getArtistInfo,
    getTopArtists,
    openArtistCard,
};
