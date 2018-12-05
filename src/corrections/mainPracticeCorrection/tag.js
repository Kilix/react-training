import PropTypes from 'prop-types';
import React from 'react';

const Tag = ({name}) => <div className="tag">{name}</div>;

Tag.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Tag;
