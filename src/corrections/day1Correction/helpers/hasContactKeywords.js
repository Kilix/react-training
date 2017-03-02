const hasContactKeywords = (contact, keywords) => keywords
    .every(keyword => contact.keywords.includes(keyword));

export default hasContactKeywords;
