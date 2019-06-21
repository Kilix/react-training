import PropTypes from 'prop-types';
import * as React from 'react';
import cx from 'classnames';

import ThemeContext from './theme';

const Card = ({children, header}) => {
    const theme = React.useContext(ThemeContext);
    return (
        <div className={cx('card', `card--${theme}`)}>
            <div className="card__header">{header}</div>
            {children}
        </div>
    );
};

Card.propTypes = {
    children: PropTypes.node.isRequired,
    header: PropTypes.node,
};

export default Card;
