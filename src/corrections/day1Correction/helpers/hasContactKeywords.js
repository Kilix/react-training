const hasContactKeywords = (contact, keyword) => !keyword || contact.keywords.includes(keyword);

export default hasContactKeywords;
