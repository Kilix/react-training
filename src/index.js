import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';

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
