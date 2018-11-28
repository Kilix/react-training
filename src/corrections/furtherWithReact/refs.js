import * as React from 'react';
import ReactDOM from 'react-dom';

/* TODO
 * - Focus l'input au didMount
 * - Submit le formulaire au clic sur le "span"
 */

class App extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.form = React.createRef();
    }

    componentDidMount() {
        this.textInput.current.focus();
    }

    render() {
        return (
            <div className="App">
                <form ref={this.form}>
                    <input type="number" placeholder="Nombre" ref={this.textInput} />
                    <span
                        style={{cursor: 'pointer', paddingLeft: '10px'}}
                        onClick={() => this.form.current.submit()}
                    >
                        Submit
                    </span>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
