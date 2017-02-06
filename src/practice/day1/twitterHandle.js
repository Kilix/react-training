import React, {PropTypes} from 'react';

const TwitterHandle = ({handle}) => (
    <a href={`https://twitter.com/${handle}`}>{`@${handle}`}</a>
);
TwitterHandle.propTypes = {
    handle: PropTypes.string.isRequired,
}

export default TwitterHandle;
