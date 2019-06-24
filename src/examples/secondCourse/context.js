import PropTypes from 'prop-types';
import * as React from 'react';
import ReactDOM from 'react-dom';

const ColorContext = React.createContext('');

const Fruit = ({name}) => {
    const color = React.useContext(ColorContext);
    return <div style={{color}}>{name}</div>;
};

Fruit.propTypes = {
    name: PropTypes.string.isRequired,
};

const List = () => (
    <div>
        {['apple', 'orange', 'peach'].map(fruit => (
            <Fruit key={fruit} name={fruit} />
        ))}
    </div>
);

const Parent = () => (
    <ColorContext.Provider value="green">
        <List />
    </ColorContext.Provider>
);

ReactDOM.render(<Parent />, document.getElementById('root'));
