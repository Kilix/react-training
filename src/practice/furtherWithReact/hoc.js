import * as React from 'react';
import ReactDOM from 'react-dom';

/* TODO
 * - on désire avoir une gestion générique des formulaires :
 *      créer un HOC qui gère le changement de state et le test des données au submit
 */

const validateForm = ({age, firstname}) => (firstname && age > 0 ? false : true);
const submitForm = data => console.log('Submit !', data);
const initialData = {age: '', firstname: ''};

const Form = () => {
    const [data, setData] = React.useState(initialData);

    const onChange = event => {
        const target = event.target;
        setData(prevData => ({...prevData, [target.name]: target.value}));
    };

    const onSubmit = () => {
        if (validateForm(data)) return;
        submitForm(data);
    };

    const {age, firstname} = data;
    return (
        <div>
            <input placeholder="Firstname" name="firstname" value={firstname} onChange={onChange} />
            <input type="number" name="age" placeholder="Age" value={age} onChange={onChange} />
            <button onClick={onSubmit}>Submit</button>
        </div>
    );
};

const App = () => (
    <div className="App">
        <Form />
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
