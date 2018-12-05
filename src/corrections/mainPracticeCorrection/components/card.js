import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import {ThemeConsumer} from './theme';

const Card = ({children, header, theme}) => (
    <ThemeConsumer>
        {theme => (
            <div className={cx('card', `card--${theme}`)}>
                <div className="card__header">{header}</div>
                {children}
            </div>
        )}
    </ThemeConsumer>
);

Card.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Card;
