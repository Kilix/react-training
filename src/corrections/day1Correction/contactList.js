import PropTypes from 'prop-types';
import React from 'react';

import './contactList.css';

import Contact from './contact';

const contactListPropTypes = {
    list: PropTypes.array.isRequired,
};

const ContactList = ({list}) => (
    <div className="list">
        {list.map(contact => <Contact key={contact.id} contact={contact} />)}
    </div>
);
ContactList.propTypes = contactListPropTypes;

export default ContactList;
