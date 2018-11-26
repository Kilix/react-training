import * as React from 'react';
import ReactDOM from 'react-dom';

/* TODO
 * - Le theme de la page a pour couleur bleu et borderRadius: 10px
 * - La carte a un thème à elle : couleur violette et borderRadius: 0
 */

const ThemeContext = React.createContext({});

const Title = ({children}) => (
    <ThemeContext.Consumer>
        {({color}) => <h2 style={{color}}>{children}</h2>}
    </ThemeContext.Consumer>
);
const Button = ({children}) => (
    <ThemeContext.Consumer>
        {({color, borderRadius}) => (
            <button style={{borderRadius, color, borderColor: color}}>{children}</button>
        )}
    </ThemeContext.Consumer>
);

const Card = () => {
    const theme = {color: 'purple', borderRadius: 0};
    return (
        <ThemeContext.Provider value={theme}>
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
        </ThemeContext.Provider>
    );
};

class App extends React.Component {
    render() {
        const theme = {color: '#3683CE', borderRadius: '10px'};
        return (
            <div className="App">
                <ThemeContext.Provider value={theme}>
                    <Title>Un titre de page</Title>
                    <Button>Un bouton</Button>
                    <Card />
                </ThemeContext.Provider>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
