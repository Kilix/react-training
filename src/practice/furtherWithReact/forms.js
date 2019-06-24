import React from 'react';
import ReactDOM from 'react-dom';

/* TODO
 * - Faire de l'input un "controlled component" (valeur gardée dans le state du composant)
 * - console.log la valeur de l'input au submit
 * - Ajouter une règle de validation : si le nombre saisi est > 10, afficher un message d'erreur
 */

const App = () => (
    <div className="App">
        <input type="number" placeholder="Nombre < 10" />
        <button>Submit</button>
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
