import React, {PropTypes} from 'react';

import './keyword.css';

const keywordPropTypes = {
    keyword: PropTypes.string.isRequired,
};

const Keyword = ({keyword}) => (
    <span className="keyword">{keyword}</span>
);
Keyword.propTypes = keywordPropTypes;

export default Keyword;
