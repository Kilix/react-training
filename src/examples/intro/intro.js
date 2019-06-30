import React, {createElement} from 'react';
import ReactDOM from 'react-dom';

import './intro.css';

const App = () => {
    const actors = ['George', 'Peter', 'Steven', 'Dave'];
    return createElement(
        'div',
        {className: 'App'},
        createElement('p', {className: 'App-intro'}, 'Des gens sympas'),
        createElement(
            'ul',
            {},
            actors.map((actor, index) => createElement('li', {key: index}, actor))
        )
    );
};

const renderPage = () => {
    ReactDOM.render(<App />, document.getElementById('root'));
};
renderPage();

// with JSX
// pass actors as props to <App />
// add button to addHugues, that modifies actors and rerenderPage
// add useState hook instead of triggering a full rerender
// Add a simple component ~ reusable template
