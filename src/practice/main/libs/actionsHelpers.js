import {get} from './apiUtils';

const getTopArtistsPromise = () => get('method=chart.gettopartists').then(
    ({artists: {artist}}) => artist
);

const getArtistInfoPromise = (artistName) => get('method=artist.getinfo&artist=' + artistName).then(
    ({artist}) => artist
);

export {
    getArtistInfoPromise,
    getTopArtistsPromise,
};
