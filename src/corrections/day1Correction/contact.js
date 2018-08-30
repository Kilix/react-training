import PropTypes from 'prop-types';
import React, {Component} from 'react';

import './contact.css';

import getContactDisplayName from './helpers/getContactDisplayName';
import TwitterHandle from './twitterHandle';
import Keyword from './keyword';
import InlineList from './inlineList';

import {fetchTwitterBio} from '../../practice/day1/mockData';

const contactPropTypes = {
    contact: PropTypes.shape({
        firstname: PropTypes.string.isRequired,
        middleName: PropTypes.string,
        lastname: PropTypes.string.isRequired,
        twitterHandle: PropTypes.string,
        keywords: PropTypes.array.isRequired,
    }).isRequired,
};

class Contact extends Component {
    state = {
        twitterBio: null,
    };

    componentDidMount() {
        const {contact} = this.props;

        if (contact.twitterHandle)
            fetchTwitterBio(contact.id).then(({bio}) => {
                this.setState({twitterBio: bio});
            });
    }

    render() {
        const {contact} = this.props;

        return (
            <div className="contact">
                <div className="contact__header">
                    <div className="contact__name">{getContactDisplayName(contact)}</div>
                    {contact.twitterHandle && <TwitterHandle handle={contact.twitterHandle} />}
                </div>
                <InlineList elements={contact.keywords}>
                    {(element, index) => <Keyword keyword={element} key={index} />}
                </InlineList>
                {this.state.twitterBio && (
                    <div className="contact__bio">{this.state.twitterBio}</div>
                )}
            </div>
        );
    }
}
Contact.propTypes = contactPropTypes;

export default Contact;
