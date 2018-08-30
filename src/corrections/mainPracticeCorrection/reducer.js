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
            return {
                ...state,
                artistsMap: artist,
                topArtists: result,
            };
        }

        case actions.OPEN_ARTIST_CARD: {
            const {artistName} = action.payload;
            return {
                ...state,
                selectedArtistName: artistName,
            };
        }

        case actions.GET_ARTIST_INFO_SUCCESS: {
            const {
                entities: {artist},
                result,
            } = action.payload;
            const {artistsMap} = state;
            return {
                ...state,
                artistsMap: {
                    ...artistsMap,
                    [result]: {
                        ...artistsMap[result],
                        ...artist[result],
                    },
                },
            };
        }

        default:
            return state;
    }
};

export default reducer;
