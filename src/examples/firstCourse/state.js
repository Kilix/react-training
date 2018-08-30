import React from 'react';
import ReactDOM from 'react-dom';

const Element = ({clicked}) => {
    console.log('Element renders');
    return <div>{clicked ? 'Clicked!' : 'Not clicked!'}</div>
}

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: false,
        };
    }

    handleClick() {
        this.setState({clicked: true});
    }

    render() {
        console.log('App renders');
        return (
            <button onClick={() => this.handleClick()}>
                <Element clicked={this.state.clicked}/>
            </button>
        );
    }
}
// What about unmount?
const Parent = () => {
    console.log('parent renders');
    return <App/>
}

ReactDOM.render(<Parent />, document.getElementById('root'));
