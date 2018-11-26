import React, {Component} from 'react';
import ReactDOM from 'react-dom';

/* TODO
 * - Faire de l'input un "controlled component" (valeur gardée dans le state du composant)
 * - console.log la valeur de l'input au submit
 * - Ajouter une règle de validation : si le nombre saisi est > 10, afficher un message d'erreur
 */

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }

    onInputChange = event => {
        const newValue = event.target.value;
        this.setState(() => ({value: newValue}));
    };

    submitForm = () => {
        const {value} = this.state;
        console.log('Le nombre saisi est : ', value);
    };

    render() {
        const {value} = this.state;
        return (
            <div className="App">
                <input
                    type="number"
                    onChange={this.onInputChange}
                    placeholder="Nombre < 10"
                    value={value}
                />
                <button onClick={this.submitForm}>Submit</button>
                {value >= 10 && <div style={{color: 'red'}}>Le nombre saisi est trop grand</div>}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
