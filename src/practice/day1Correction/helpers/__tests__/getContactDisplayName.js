import getContactDisplayName from '../getContactDisplayName';

describe('getContactDisplayName', () => {
    it('should render Firstname LASTNAME', () => {
        const displayName = getContactDisplayName({firstname: 'John', lastname: 'Vamos'});
        expect(displayName).toBe('John VAMOS');
    });

    it('should display the middle name if it is provided', () => {
        const contactWithMiddleName = {firstname: 'Philip', middleName: 'K', lastname: 'Dick'};
        const displayName = getContactDisplayName(contactWithMiddleName);
        expect(displayName).toBe('Philip K. DICK');
    });
});
