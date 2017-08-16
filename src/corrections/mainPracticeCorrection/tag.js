import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import getContextTheme from './components/getContextTheme';

const Tag = ({name, theme}) => (
    <div className={cx('tag', `tag--${theme}`)}>
        {name}
    </div>
);

Tag.propTypes = {
    name: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired,
};

export default getContextTheme(Tag);
