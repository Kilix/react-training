import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './intro.css';

const Actor = ({name, isCool}) => (
    <li>
        Acteur : {name} {isCool ? 'est cool' : 'pas cool'}
    </li>
);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            actors: [
                {name: 'George', isCool: true},
                {name: 'Peter', isCool: false},
                {name: 'Steven', isCool: false},
                {name: 'Dave', isCool: false},
            ],
        };
    }

    render() {
        const addHugues = () => {
            this.setState({
                actors: this.state.actors.concat({name: 'Hugues', isCool: false}),
            });
        };

        const favouriteActors = this.state.actors.filter(
            actor => actor.name === 'Peter' || actor.name === 'Steven'
        );

        return (
            <div className="App">
                <p className="App-intro">Des gens sympas</p>
                <ul>
                    {this.state.actors.map((actor, index) => (
                        <Actor key={index} name={actor.name} isCool={actor.isCool} />
                    ))}
                </ul>
                <button onClick={addHugues}>Ajouter Hugues</button>
                <div>Mais mes préférés sont :</div>
                <ul>
                    {favouriteActors.map((actor, index) => (
                        <Actor key={index} name={actor.name} isCool={actor.isCool} />
                    ))}
                </ul>
            </div>
        );
    }
}
renderPage();

function renderPage() {
    ReactDOM.render(<App />, document.getElementById('root'));
}

// pass actors as props to <App />
// add button to addHugues, that modifies actors and rerenderPage
// show chrome inspector to show what is actually added/removed from the dom
// Use class for App and use setState instead of triggering a full rerender
// Add a simple component ~ reusable template
