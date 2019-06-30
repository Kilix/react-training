import React from 'react';
import ReactDOM from 'react-dom';

const Element = ({clicked}) => {
    console.log('Element renders');
    return <div>{clicked ? 'Clicked!' : 'Not clicked!'}</div>;
};
const App = () => {
    const [clicked, setClicked] = React.useState(false);
    console.log('App renders');
    return (
        <button onClick={() => setClicked(true)}>
            <Element clicked={clicked} />
        </button>
    );
};
// What about unmount?
const Parent = () => {
    console.log('parent renders');
    return <App />;
};

ReactDOM.render(<Parent />, document.getElementById('root'));
