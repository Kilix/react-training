import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

import './example.css';

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT': {
            return state++;
        }

        case 'DECREMENT': {
            return state--;
        }

        default:
            return state;
    }
};

const Counter = (props) => (
    <form className="pure-form example">
        <span className="counter">{props.counter}</span>
        <button type="button">Increment</button>
        <button type="button">Decrement</button>
    </form>
);

const renderApp = () => {
    ReactDOM.render(
        <Counter counter={0} />,
        document.getElementById('root'),
    );
};

renderApp();
