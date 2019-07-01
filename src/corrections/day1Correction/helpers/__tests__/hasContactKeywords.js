import hasContactKeywords from '../hasContactKeywords';

describe('hasContactKeywords', () => {
    const contact = {id: 1, keywords: ['fp', 'react']};

    it('should accept a matching contact', () => {
        expect(hasContactKeywords(contact, 'fp')).toBe(true);
    });

    it('should return if the keyword is not included', () => {
        expect(hasContactKeywords(contact, 'cyclejs')).toBe(false);
    });

    it('should authorize the contact if no keyword is provided', () => {
        expect(hasContactKeywords(contact)).toBe(true);
    });
});
