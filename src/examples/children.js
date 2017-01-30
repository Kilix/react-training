import React from 'react';
import ReactDOM from 'react-dom';

import './children.css';

// TODO material paper card
const BorderWrapper = ({children}) => (
    <div className="border">
        {children}
    </div>
);


const App = () => (
    <form className="form pure-form">
        <BorderWrapper>
            <input />
        </BorderWrapper>
        <BorderWrapper>
            <button type="button">It's a button</button>
        </BorderWrapper>
    </form>
);

ReactDOM.render(
    <App />,
    document.getElementById('root'),
)
