import React from 'react';
import ReactDOM from 'react-dom';

import './intro.css';

const Actor = ({name, isCool}) => (
    <li>
        Acteur : {name} {isCool ? 'est cool' : 'pas cool'}
    </li>
);
const App = () => {
    const [actors, setActors] = React.useState([
        {name: 'George', isCool: true},
        {name: 'Peter', isCool: false},
        {name: 'Steven', isCool: false},
        {name: 'Dave', isCool: false},
    ]);

    const addHugues = () => {
        setActors(actors.concat({name: 'Hugues', isCool: false}));
    };

    const favouriteActors = actors.filter(
        actor => actor.name === 'Peter' || actor.name === 'Steven'
    );

    return (
        <div className="App">
            <p className="App-intro">Des gens sympas</p>
            <ul>
                {actors.map((actor, index) => (
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
};

ReactDOM.render(<App />, document.getElementById('root'));

// pass actors as props to <App />
// add button to addHugues, that modifies actors and rerenderPage
// show chrome inspector to show what is actually added/removed from the dom
// add useState hook instead of triggering a full rerender
// Add a simple component ~ reusable template
