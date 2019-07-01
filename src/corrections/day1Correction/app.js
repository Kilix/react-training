import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

import keywords from './helpers/keywords';
import ContactList from './contactList';
import Filters from './filters/filters';
import hasContactKeywords from './helpers/hasContactKeywords';

import contacts from '../../practice/day1/mockData';

const App = ({contacts}) => {
    const [selectedKeyword, setSelectedKeyword] = React.useState(null);

    const filteredContacts = contacts.filter(contact =>
        hasContactKeywords(contact, selectedKeyword)
    );
    const selectKeyword = keyword => {
        setSelectedKeyword(selectedKeyword === keyword ? null : keyword);
    };

    return (
        <div>
            <h1>My contacts</h1>
            <Filters
                keywords={keywords}
                selectedKeyword={selectedKeyword}
                selectKeyword={selectKeyword}
            />
            <ContactList list={filteredContacts} />
        </div>
    );
};
App.propTypes = {
    contacts: PropTypes.array.isRequired,
};

ReactDOM.render(<App contacts={contacts} />, document.getElementById('root'));
