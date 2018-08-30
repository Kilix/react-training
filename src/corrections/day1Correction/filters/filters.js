import PropTypes from 'prop-types';
import React from 'react';

import FilterItem from './filterItem';
import InlineList from '../inlineList';

import './filters.css';

const filtersPropTypes = {
    keywords: PropTypes.array.isRequired,
    selectKeyword: PropTypes.func.isRequired,
    selectedKeyword: PropTypes.string,
};

const Filters = ({keywords, selectedKeyword, selectKeyword}) => (
    <div className="filters">
        <InlineList elements={keywords}>
            {(keyword, index) => (
                <FilterItem
                    key={index}
                    value={keyword}
                    selected={selectedKeyword === keyword}
                    selectItem={selectKeyword}
                />
            )}
        </InlineList>
    </div>
);
Filters.propTypes = filtersPropTypes;

export default Filters;
