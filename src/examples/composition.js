import React from 'react';
import ReactDOM from 'react-dom';

import './composition.css';

const Button = ({type, label}) => (
    <button
        className="pure-button"
        type={type}
    >
        {label}
    </button>
);

const SubmitButton = () => <Button type="submit" label="Valider" />;
const CancelButton = () => <Button type="button" label="Annuler" />;

// What about creating a FormFooter component?

const App = () => (
    <form
        className="form pure-form"
        onSubmit={e => {
            e.preventDefault();
        }}
    >
        <input />
        <div className="form-footer">
            <SubmitButton />
            <CancelButton />
        </div>
    </form>
);

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
