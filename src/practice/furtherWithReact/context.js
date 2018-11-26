import * as React from 'react';
import ReactDOM from 'react-dom';

/* TODO
 * - Le theme de la page a pour couleur bleu et borderRadius: 5px
 * - La carte a un thème à elle : couleur violette et borderRadius: 0
 */

const Title = ({children}) => <h2>{children}</h2>;
const Button = ({children}) => <button>{children}</button>;

const Card = () => (
    <div
        style={{
            boxShadow: '0 2px 6px 0 rgba(0,0,0,0.5)',
            padding: '10px',
            marginTop: '20px',
        }}
    >
        <Title>Le titre de la carte</Title>
        <Button>Un bouton</Button>
    </div>
);

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Title>Un titre de page</Title>
                <Button>Un bouton</Button>
                <Card />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
