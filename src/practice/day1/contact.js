import React, {Component, PropTypes} from 'react';

import './contact.css';

import getContactDisplayName from './helpers/getContactDisplayName';
import TwitterHandle from './twitterHandle';
import Keyword from './keyword';
import InlineList from './inlineList';

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

    shouldComponentUpdate(nextProps) {
        return nextProps.contact !== this.props.contact
    }

    render() {
        const {contact} = this.props
        console.log(contact.lastname)
        return (
            <div className="contact">
                <div className="contact__header">
                    <div className="contact__name">{getContactDisplayName(contact)}</div>
                    {contact.twitterHandle && <TwitterHandle handle={contact.twitterHandle} />}
                </div>
                <InlineList elements={contact.keywords}>
                    {(element, index) => <Keyword keyword={element} key={index} />}
                </InlineList>
            </div>
        );
    }
} ;
Contact.propTypes = contactPropTypes;

export default Contact;
