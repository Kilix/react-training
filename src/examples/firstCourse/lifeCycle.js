import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ComponentWithLifecycle extends Component {
    state = {
        renderCount: 0,
    };
    componentWillMount() {
        console.log('componentWillMount');
        this.setState({renderCount: this.state.renderCount + 1});
    }
    componentDidMount() {
        // This is where you should do side-effects
        console.log('componentDidMount');
        this.timer = setInterval(() => {
            this.setState(state => ({renderCount: state.renderCount + 1}));
        }, 3000);
    }
    // componentWillReceiveProps(nextProps, nextState) {
    //     console.log('componentWillReceiveProp');
    //     console.log(`previous: ${this.props.parentCount}, next: ${nextProps.parentCount}`);
    // }
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
        console.log(`previous: ${this.state.renderCount}, next: ${nextState.renderCount}`);
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
        clearInterval(this.timer);
    }
    render() {
        console.log('rendering ComponentWithLifecycle');
        return (
            <div>
                It has been updated {this.state.renderCount} times, parent count is{' '}
                {this.props.parentCount}
            </div>
        );
    }
}
class Parent extends Component {
    state = {
        open: true,
        count: 0,
    };
    componentWillMount() {
        this.countTimer = setInterval(() => {
            this.setState(state => ({count: state.count + 1}));
        }, 5000);
        this.openTimer = setInterval(() => {
            this.setState(state => ({open: !state.open}));
        }, 10000);
    }
    render() {
        return this.state.open ? <ComponentWithLifecycle parentCount={this.state.count} /> : null;
    }
}

// const App = () => (
//     <Parent />
// );
const App = () => <ComponentWithLifecycle parentCount={0} />;

ReactDOM.render(<App />, document.getElementById('root'));
