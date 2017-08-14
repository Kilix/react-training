import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import getContextTheme from './getContextTheme';

const Card = ({children, header, theme}) => (
    <div className={cx('card', `card--${theme}`)}>
        <div className="card__header">
            {header}
        </div>
        {children}
    </div>
);

Card.propTypes = {
    children: PropTypes.node.isRequired,
    header: PropTypes.node.isRequired,
    theme: PropTypes.string.isRequired,
};

export default getContextTheme(Card);
