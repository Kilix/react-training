import React from 'react';
import ReactDOM from 'react-dom';

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
        return (
            <button onClick={() => this.handleClick()}>
                {this.state.clicked ? 'Clicked!' : 'Not clicked!'}
            </button>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
