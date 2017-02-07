import React from 'react';
import ReactDOM from 'react-dom';

import './children.css';

const Paper = ({children}) => (
    <div className="paper">
        {children}
    </div>
);


const App = () => (
    <div className="children">
        <Paper>
            It's a simple material paper
        </Paper>
        <Paper>
            It's a form
            <form className="pure-form">
                <button type="button">with a button</button>
            </form>
        </Paper>
    </div>
);

ReactDOM.render(
    <App />,
    document.getElementById('root'),
)
