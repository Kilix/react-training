import cx from 'classnames';
import React from 'react';
import ReactDOM from 'react-dom';

import './style.css';

const ElementWithClasses = ({text, selected}) => {
    const classes = cx('element-with-classes', {
        'element-with-classes--selected': selected,
    });
    return <div className={classes}>{text}</div>;
};
const ElementWithInlineStyle = ({text, selected}) => {
    const styles = {
        opacity: selected ? 1 : 0.6,
        textDecoration: 'underline',
    };
    return <div style={styles}>{text}</div>;
};

const App = () => (
    <div className="style">
        <ElementWithClasses text="A" />
        <ElementWithClasses text="B" selected />
        <ElementWithInlineStyle text="C" />
        <ElementWithInlineStyle text="D" selected/>
    </div>
);

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
