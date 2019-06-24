import React from 'react';
import ReactDOM from 'react-dom';

const ComponentWithEvent = () => {
    const onClick = event => {
        console.log('Synthetic event type: ', event.type);
        const eventType = event.type;

        setTimeout(function() {
            console.log('Asynchronous synthetic event type: ', event.type);
            console.log('eventType variable: ', eventType);
        }, 0);
    };

    return (
        <button type="button" onClick={onClick}>
            Click me!
        </button>
    );
};

ReactDOM.render(<ComponentWithEvent />, document.getElementById('root'));
