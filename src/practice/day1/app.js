import React from 'react';
import ReactDOM from 'react-dom';

import ContactList from './contactList';
import contacts from './mockData';

const App = () => {
    return (
        <div>
            <h1>My contacts</h1>
            <ContactList list={contacts} />
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('root'),
)
