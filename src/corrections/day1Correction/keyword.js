import PropTypes from 'prop-types';
import React from 'react';

import './keyword.css';

const keywordPropTypes = {
    keyword: PropTypes.string.isRequired,
};

const Keyword = ({keyword}) => <span className="keyword">{keyword}</span>;
Keyword.propTypes = keywordPropTypes;

export default Keyword;
