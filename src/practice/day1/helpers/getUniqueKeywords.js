const getUniqueKeywords = (contacts) => {
    const keywordsWithDuplicates = contacts
        .map(contact => contact.keywords)
        .reduce((total, contactKeywords) => total.concat(contactKeywords))
    return Array.from(new Set(keywordsWithDuplicates));
};

export default getUniqueKeywords;
