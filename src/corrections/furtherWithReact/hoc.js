import * as React from 'react';
import ReactDOM from 'react-dom';

/* TODO
 * - on désire avoir une gestion générique des formulaires :
 *      créer un HOC qui gère le changement de state et le test des données au submit
 */

const wrapForm = BaseComponent =>
    class FormWrapper extends React.Component {
        constructor(props) {
            super(props);
            this.state = props.initialData;
        }

        onChange = event => {
            const target = event.target;
            this.setState(prevState => ({...prevState, [target.name]: target.value}));
        };

        onSubmit = () => {
            const {validateForm, submitForm} = this.props;
            if (validateForm(this.state)) return;
            submitForm(this.state);
        };

        render() {
            const {initialData, validateForm, ...otherProps} = this.props;
            return (
                <BaseComponent
                    onChange={this.onChange}
                    data={this.state}
                    onSubmit={this.onSubmit}
                    {...otherProps}
                />
            );
        }
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
