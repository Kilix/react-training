import PropTypes from 'prop-types';
import React from 'react';

const Card = ({children, header, theme}) => (
    <div className="card">
        <div className="card__header">{header}</div>
        {children}
    </div>
);

Card.propTypes = {
    children: PropTypes.node.isRequired,
    header: PropTypes.node.isRequired,
};

export default Card;
