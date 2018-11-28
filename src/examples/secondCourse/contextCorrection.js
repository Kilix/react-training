import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

const ThemeContext = React.createContext('purple');

class Fruit extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
    };

    render() {
        const {name} = this.props;
        return (
            <ThemeContext.Consumer>
                {color => <div style={{color}}>{name}</div>}
            </ThemeContext.Consumer>
        );
    }
}

class List extends React.Component {
    render() {
        return (
            <div>
                {['apple', 'orange', 'peach'].map(fruit => (
                    <Fruit key={fruit} name={fruit} />
                ))}
            </div>
        );
    }
}

const Parent = () => (
    <ThemeContext.Provider value="green">
        <List />
    </ThemeContext.Provider>
);

ReactDOM.render(<Parent />, document.getElementById('root'));
