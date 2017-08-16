import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const filterItemPropTypes = {
    selected: PropTypes.bool.isRequired,
    selectItem: PropTypes.func.isRequired,
    unSelectItem: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

const FilterItem = ({value, selected, selectItem, unSelectItem}) => (
    <button
        className={cx('filter-item', 'pure-button', {'pure-button-active': selected})}
        onClick={selected ? () => unSelectItem(value) : () => selectItem(value)}
    >
        {value}
    </button>
);
FilterItem.propTypes = filterItemPropTypes;

export default FilterItem;
