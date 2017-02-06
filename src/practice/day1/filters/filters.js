import React, {PropTypes} from 'react';

import FilterItem from './filterItem';
import InlineList from '../inlineList';

import './filters.css';

const filtersPropTypes = {
    addKeyword: PropTypes.func.isRequired,
    keywords: PropTypes.array.isRequired,
    removeKeyword: PropTypes.func.isRequired,
    selectedKeywords: PropTypes.array.isRequired,
};

const Filters = ({keywords, selectedKeywords, addKeyword, removeKeyword}) => (
    <div className="filters">
        <InlineList elements={keywords}>
            {(keyword, index) => (
                <FilterItem
                    key={index}
                    value={keyword}
                    selected={selectedKeywords.includes(keyword)}
                    selectItem={addKeyword}
                    unSelectItem={removeKeyword}
                />
            )}
        </InlineList>
    </div>
);
Filters.propTypes = filtersPropTypes;

export default Filters;
