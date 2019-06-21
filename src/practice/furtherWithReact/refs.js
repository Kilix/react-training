import * as React from 'react';
import ReactDOM from 'react-dom';

/* TODO
 * - Focus l'input au didMount
 * - Submit le formulaire au clic sur le "span"
 */

const App = () => (
    <div className="App">
        <form>
            <input type="number" placeholder="Nombre" />
            <span style={{cursor: 'pointer', paddingLeft: '10px'}}>Submit</span>
        </form>
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
