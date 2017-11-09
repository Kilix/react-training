import PropTypes from 'prop-types';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import keywords from './helpers/keywords';
import ContactList from './contactList';
import Filters from './filters/filters';
import hasContactKeywords from './helpers/hasContactKeywords';

import contacts from '../../practice/day1/mockData';

class App extends Component {
    static propTypes = {
        contacts: PropTypes.array.isRequired,
    };

    state = {
        selectedKeyword: null,
    };

    selectKeyword = keyword => {
        this.setState((prevState, props) => ({
            selectedKeyword: prevState.selectedKeyword === keyword ? null : keyword,
        }));
    };

    render() {
        const {contacts} = this.props;

        const filteredContacts = contacts.filter(contact =>
            hasContactKeywords(contact, this.state.selectedKeyword)
        );

        return (
            <div>
                <h1>My contacts</h1>
                <Filters
                    keywords={keywords}
                    selectedKeyword={this.state.selectedKeyword}
                    selectKeyword={this.selectKeyword}
                />
                <ContactList list={filteredContacts} />
            </div>
        );
    }
}

ReactDOM.render(<App contacts={contacts} />, document.getElementById('root'));
