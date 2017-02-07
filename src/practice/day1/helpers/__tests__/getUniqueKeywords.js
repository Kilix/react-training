import getUniqueKeywords from '../getUniqueKeywords';

describe('getUniqueKeywords', () => {
    it('should filter the duplicates', () => {
        const contacts = [
            {keywords: ['fp', 'react']},
            {keywords: ['cyclejs', 'react']},
        ];
        const filteredKeywords = getUniqueKeywords(contacts);

        // Ideally, you would test the length and the fact that these keywords are there
        // This test makes assumptions about the order of the array, which is not correct
        expect(filteredKeywords).toEqual(['fp', 'react', 'cyclejs']);
    })
});
