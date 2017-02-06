import React, {PropTypes} from 'react';

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

const Contact = ({contact}) => (
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
Contact.propTypes = contactPropTypes;

export default Contact;
