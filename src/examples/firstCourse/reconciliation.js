import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
    state = {
        counter: 0,
    };
    incrementCounter = () => {
        this.setState(({counter}) => ({counter: counter + 1}));
    };

    render() {
        return (
            <div onClick={this.incrementCounter}>
                Counter {this.props.counterName}: {this.state.counter}
            </div>
        );
    }
}

class App extends React.Component {
    state = {
        counters: ['first', 'second', 'third'],
    };
    addCounter = () => {
        this.setState(({counters}) => ({
            counters: ['zero', ...counters],
        }));
    };
    render() {
        return (
            <div>
                {this.state.counters.map((counter, index) => (
                    <Counter counterName={counter} />
                ))}
                <button onClick={this.addCounter}>Add counter</button>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
