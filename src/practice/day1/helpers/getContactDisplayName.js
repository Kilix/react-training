const getContactDisplayName = ({middleName, firstname, lastname}) => {
    const paddedMiddleName = middleName ? ` ${middleName}.` : '';
    return `${firstname}${paddedMiddleName} ${lastname.toUpperCase()}`;
};

export default getContactDisplayName;
