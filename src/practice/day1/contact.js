import React, {PropTypes} from 'react';

import './contact.css';

import TwitterHandle from './twitterHandle';
import Keyword from './keyword';
import InlineList from './inlineList';

const contactPropTypes = {
    contact: PropTypes.shape({
         firstname: PropTypes.string.isRequired,
         middleName: PropTypes.string,
         lastname: PropTypes.string.isRequired,
         twitterHandle: PropTypes.string.isRequired,
         keywords: PropTypes.array.isRequired,
    }).isRequired,
};

const Contact = ({contact}) => {
    const {
        firstname,
        middleName,
        lastname,
        twitterHandle,
        keywords,
    } = contact;

    const paddedMiddleName = middleName ? ` ${middleName}.` : '';
    const contactName = `${firstname}${paddedMiddleName} ${lastname.toUpperCase()}`;
    return (
        <div className="contact">
            <div className="contact__header">
                <div className="contact__name">{contactName}</div>
                <TwitterHandle handle={twitterHandle} />
            </div>
            <InlineList elements={keywords}>
                {(element, index) => <Keyword keyword={element} key={index} />}
            </InlineList>
        </div>
    );
};
Contact.propTypes = contactPropTypes;

export default Contact;
