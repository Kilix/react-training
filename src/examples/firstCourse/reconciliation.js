import * as React from 'react';
import ReactDOM from 'react-dom';

const Counter = ({counterName}) => {
    const [counter, setCounter] = React.useState(0);
    return (
        <div onClick={() => setCounter(counter + 1)}>
            Counter {counterName}: {counter}
        </div>
    );
};

const App = () => {
    const [counters, setCounters] = React.useState(['first', 'second', 'third']);

    return (
        <div>
            {counters.map((counter, index) => (
                <Counter counterName={counter} />
            ))}
            <button onClick={() => setCounters(['zero', ...counters])}>Add counter</button>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
