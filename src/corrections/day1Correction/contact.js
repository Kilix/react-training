import PropTypes from 'prop-types';
import React from 'react';

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

const Contact = ({contact}) => {
    const [twitterBio, setTwitterBio] = React.useState(null);
    React.useEffect(
        () => {
            if (contact.twitterHandle)
                fetchTwitterBio(contact.id).then(({bio}) => {
                    setTwitterBio(bio);
                });
        },
        [contact]
    );

    return (
        <div className="contact">
            <div className="contact__header">
                <div className="contact__name">{getContactDisplayName(contact)}</div>
                {contact.twitterHandle && <TwitterHandle handle={contact.twitterHandle} />}
            </div>
            <InlineList elements={contact.keywords}>
                {(element, index) => <Keyword keyword={element} key={index} />}
            </InlineList>
            {twitterBio && <div className="contact__bio">{twitterBio}</div>}
        </div>
    );
};
Contact.propTypes = contactPropTypes;

export default Contact;
