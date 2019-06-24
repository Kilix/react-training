import * as React from 'react';
import ReactDOM from 'react-dom';

/* TODO
 * - Focus l'input au didMount
 * - Submit le formulaire au clic sur le "span"
 */

const App = () => {
    const textInput = React.useRef(null);
    const form = React.useRef(null);

    const focusInput = () => {
        textInput.current.focus();
    };

    React.useEffect(focusInput, []);

    return (
        <div className="App">
            <form ref={form}>
                <input type="number" placeholder="Nombre" ref={textInput} />
                <span
                    style={{cursor: 'pointer', paddingLeft: '10px'}}
                    onClick={() => form.current.submit()}
                >
                    Submit
                </span>
            </form>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
