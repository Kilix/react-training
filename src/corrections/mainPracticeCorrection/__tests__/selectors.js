import {getArtistByName, getSelectedArtist} from '../selectors';

const artistsMap = {
    'John': {name: 'John'},
    'Paul': {name: 'Paul'},
    'Ringo': {name: 'Ringo'},
    'George': {name: 'George'},
};

describe('getArtistByName', () => {
    it('should get the artist', () => {
        const state = {
            artistsMap,
        };
        const artist = getArtistByName(state, 'John');
        expect(artist).toEqual({name: 'John'});
    });

    it('should return null if the map is not initialized', () => {
        const state = {
            artistsMap: null,
        };
        const artist = getArtistByName(state, 'John');
        expect(artist).toEqual(null);
    })
});

describe('getSelectedArtist', () => {
    it('should find the artist corresponding to the selectedArtist', () => {
        const state = {
            artistsMap,
            selectedArtistName: 'John',
        };
        const artist = getSelectedArtist(state);
        expect(artist).toEqual({name: 'John'});
    });

    it('should return null if there is no selected artist', () => {
        const state = {
            artistsMap,
            selectedArtistName: null,
        };
        const artist = getSelectedArtist(state);
        expect(artist).toEqual(null);
    });
});
