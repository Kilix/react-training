import * as React from 'react';
import ReactDOM from 'react-dom';

/* TODO
 * - on désire avoir une gestion générique des formulaires :
 *      créer un render prop qui gère le changement de state et le test des données au submit
 * - Vous pouvez repartir du HOC créé au TP précédent
 */

const validateForm = ({age, firstname}) => (firstname && age > 0 ? false : true);
const submitForm = data => console.log('Submit !', data);
const initialData = {age: '', firstname: ''};

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialData;
    }

    onChange = event => {
        const target = event.target;
        this.setState(prevState => ({...prevState, [target.name]: target.value}));
    };

    onSubmit = () => {
        if (validateForm(this.state)) return;
        submitForm(this.state);
    };

    render() {
        const {age, firstname} = this.state;
        return (
            <div>
                <input
                    placeholder="Firstname"
                    name="firstname"
                    value={firstname}
                    onChange={this.onChange}
                />
                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={age}
                    onChange={this.onChange}
                />
                <button onClick={this.onSubmit}>Submit</button>
            </div>
        );
    }
}

const App = () => (
    <div className="App">
        <Form />
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
