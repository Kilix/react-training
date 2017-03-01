import R from 'ramda';

import * as actions from './actions';

export const initialState = {
    selectedArtistName: null,
    artistsMap: null,
    topArtists: [],
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actions.GET_TOP_ARTISTS_SUCCESS: {
            const {
                entities: {artist},
                result,
            } = action.payload;
            return R.pipe(
                R.assoc('artistsMap', artist),
                R.assoc('topArtists', result),
            )(state);
        }

        case actions.OPEN_ARTIST_CARD: {
            const {artistName} = action.payload;
            return R.assoc('selectedArtistName', artistName, state);
        }

        case actions.GET_ARTIST_INFO_SUCCESS: {
            const {entities: {artist}, result} = action.payload;
            return R.evolve({
                artistsMap: {
                    [result]: R.merge(artist[result]),
                },
            }, state);
        }

        default:
            return state;
    }
};

export default reducer;
