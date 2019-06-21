import * as React from 'react';
import ReactDOM from 'react-dom';

/* TODO
 * - Faire de l'input un "controlled component" (valeur gardée dans le state du composant)
 * - console.log la valeur de l'input au submit
 * - Ajouter une règle de validation : si le nombre saisi est > 10, afficher un message d'erreur
 */

const App = () => {
    const [value, setValue] = React.useState('');

    const onInputChange = event => {
        const newValue = event.target.value;
        setValue(newValue);
    };

    const submitForm = () => {
        console.log('Le nombre saisi est', value);
    };

    return (
        <div className="App">
            <input type="number" onChange={onInputChange} placeholder="Nombre < 10" value={value} />
            <button onClick={submitForm}>Submit</button>
            {value >= 10 && <div style={{color: 'red'}}>Le nombre saisi est trop grand</div>}
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
