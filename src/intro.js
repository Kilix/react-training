import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './intro.css';

const App = () => {
  const actors = ['George', 'Peter', 'Steven', 'Dave'];
  return (
    <div className="App">
      <p className="App-intro">
        Des gens sympas
      </p>
      <ul>
        {actors.map(
          (actor, index) => <li key={index}>{actor}</li>
        )}
      </ul>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// pass actors as props to <App />
// add button to addHugues, that modifies actors and rerenderPage
// show chrome inspector to show what is actually added/removed from the dom
// Use class for App and use setState instead of triggering a full rerender
// Add a simple component ~ reusable template
