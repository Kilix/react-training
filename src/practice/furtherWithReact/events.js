import React from 'react';
import ReactDOM from 'react-dom';

/* TODO
 * - au clic sur un <li>, console.log le prénom de l'acteur "cliqué"
 * - au clic sur le prénom, console.log la target de l'event 1s après (le prénom de l'acteur ne doit pas apparaître dans la console)
 */

const Actor = ({actor}) => (
    <li>
        Acteur : {actor.name} {actor.isCool ? 'est cool' : 'pas cool'}
    </li>
);

const actors = [
    {name: 'George', isCool: true},
    {name: 'Peter', isCool: false},
    {name: 'Steven', isCool: false},
    {name: 'Dave', isCool: false},
];

const App = () => (
    <div className="App">
        <p>Des gens sympas</p>
        <ul>
            {actors.map((actor, index) => (
                <Actor key={index} actor={actor} />
            ))}
        </ul>
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
