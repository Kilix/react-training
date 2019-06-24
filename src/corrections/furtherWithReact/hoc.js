import * as React from 'react';
import ReactDOM from 'react-dom';

/* TODO
 * - on désire avoir une gestion générique des formulaires :
 *      créer un HOC qui gère le changement de state et le test des données au submit
 */

const wrapForm = BaseComponent => ({initialData, submitForm, validateForm, ...otherProps}) => {
    const [data, setData] = React.useState(initialData);

    const onChange = event => {
        const target = event.target;
        setData(prevData => ({...prevData, [target.name]: target.value}));
    };

    const onSubmit = () => {
        if (validateForm(data)) return;
        submitForm(data);
    };

    return <BaseComponent onChange={onChange} data={data} onSubmit={onSubmit} {...otherProps} />;
};

const validateForm = ({age, firstname}) => (firstname && age > 0 ? false : true);
const initialData = {age: '', firstname: ''};
const submitForm = data => console.log('Submit !', data);

const Form = ({data, onChange, onSubmit}) => (
    <div>
        <input
            placeholder="Firstname"
            name="firstname"
            value={data.firstname}
            onChange={onChange}
        />
        <input type="number" name="age" placeholder="Age" value={data.age} onChange={onChange} />
        <button onClick={onSubmit}>Submit</button>
    </div>
);

const FormWithWrapper = wrapForm(Form);

const App = () => (
    <div className="App">
        <FormWithWrapper
            validateForm={validateForm}
            initialData={initialData}
            submitForm={submitForm}
        />
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
