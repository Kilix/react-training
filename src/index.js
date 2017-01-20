import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';

const Actor = ({name}) => (
  <li>Acteur : {name}</li>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actors: ['George', 'Peter', 'Steven', 'Dave'],
    };
  }

  render() {
    const addHugues = () => {
      this.setState({
        actors: this.state.actors.concat('Hugues'),
      });
    };

    const favouriteActors = this.state.actors.filter(name => name === 'Peter' || name === 'Steven');

    return (
      <div className="App">
        <p className="App-intro">
          Des gens sympas
        </p>
        <ul>
          {this.state.actors.map(
            (actor, index) => <Actor key={index} name={actor} />
          )}
        </ul>
        <button
          onClick={addHugues}
        >
          Ajouter Hugues
        </button>
        <div>Mais mes préférés sont :</div>
        <ul>
          {favouriteActors.map((actor, index) => <Actor key={index} name={actor} />)}
        </ul>
      </div>
    );
  }
}
renderPage();

function renderPage() {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}

// pass actors as props to <App />
// add button to addHugues, that modifies actors and rerenderPage
// show chrome inspector to show what is actually added/removed from the dom
// Use class for App and use setState instead of triggering a full rerender
// Add a simple component ~ reusable template
