import React from 'react';
import ReactDOM from 'react-dom';

const ComponentWithEvent = () => {
    const onClick = event => {
        console.log(event);
    };

    return (
        <button type="button" onClick={onClick}>
            Click me!
        </button>
    );
};

ReactDOM.render(<ComponentWithEvent />, document.getElementById('root'));
