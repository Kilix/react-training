import reducer from '../reducer';
import {normalizeTopArtists} from '../schemas';
import * as actions from '../actions';

describe('GET_TOP_ARTISTS_SUCCESS', () => {
    const topArtists = normalizeTopArtists([
        {name: 'Mick'},
        {name: 'Keith'},
    ]);
    const state = reducer(undefined, {
        type: actions.GET_TOP_ARTISTS_SUCCESS,
        payload: topArtists,
    });
    it('should normalize the artists', () => {
        expect(state.artistsMap).toEqual({
            Mick: {name: 'Mick'},
            Keith: {name: 'Keith'}
        });
    });
    it('should store the results', () => {
        expect(state.topArtists).toEqual(['Mick', 'Keith']);
    });
});

describe('OPEN_ARTIST_CARD', () => {
    const action = actions.openArtistCard('John');
    const state = reducer(undefined, action);
    it('should set the selectedArtist', () => {
        expect(state.selectedArtistName).toBe('John');
    });
});

describe('GET_ARTIST_INFO_SUCCESS', () => {
    const action = {
        type: actions.GET_ARTIST_INFO_SUCCESS,
        payload: {
            result: 'John',
            entities: {
                artist: {
                    'John': {
                        name: 'John',
                        playCount: 1000,
                    }
                }
            }
        }
    };
    const prevState = {
        artistsMap: {
            'John': {
                name: 'John',
                age: 40,
            },
        },
    }
    const state = reducer(prevState, action);
    it('should merge the artist in the map', () => {
        expect(state.artistsMap.John).toEqual({
            name: 'John',
            playCount: 1000,
            age: 40,
        });
    });
});
