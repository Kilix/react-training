import hasContactKeywords from '../hasContactKeywords';

describe('hasContactKeywords', () => {
    const keywords = ['fp', 'react'];

    it('should accept a matching contact', () => {
        const contactWithAllKeywords = {id: 1, keywords: ['fp', 'react']};
        expect(hasContactKeywords(contactWithAllKeywords, keywords)).toBe(true);
    });

    it('should accept a contact with more keywords', () => {
        const contactWithMoreKeywords = {id: 4, keywords: ['fp', 'react', 'cyclejs']};
        expect(hasContactKeywords(contactWithMoreKeywords, keywords)).toBe(true);
    });

    it('should refuse a contact missing keywords', () => {
        const contactWithMissingKeywords = {id: 2, keywords: ['react']};
        expect(hasContactKeywords(contactWithMissingKeywords, keywords)).toBe(false);
    });
});
