import React, {PropTypes} from 'react';

import './inlineList.css';

const inlineListPropTypes = {
    children: PropTypes.func.isRequired,
    elements: PropTypes.array.isRequired,
};

const InlineList = ({elements, children}) => (
    <div className="inline-list">
        {elements.map(children)}
    </div>
);
InlineList.propTypes = inlineListPropTypes;

export default InlineList;
