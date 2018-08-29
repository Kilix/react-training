import reducer from './reducer';

describe('ADD_DEV', () => {
    const addDevAction = {
        type: 'ADD_DEV',
        payload: {
            id: 1,
            name: 'Lesh',
        },
    };

    it('should add the dev to the list of developers', () => {
        expect(false).toBe(true);
    });
});

describe.skip('REMOVE_DEV', () => {
    const removeDevAction = {
        type: 'REMOVE_DEV',
        payload: 2,
    };

    it('should remove the dev from the list of the developers', () => {
        expect(false).toBe(true);
    });
});

describe.skip('REMOVE_ALL_DEV', () => {
    const removeAllDevAction = {
        type: 'REMOVE_ALL_DEV',
    };

    it('should empty de dev list', () => {
        expect(false).toBe(true);
    });
});
