import React from 'react';
import ReactDOM from 'react-dom';

const fakeFetch = id =>
    new Promise(resolve => {
        setTimeout(() => {
            resolve({id, name: `Id-${id}`});
        }, 1000);
    });

class Fetcher extends React.Component {
    state = {
        name: null,
    };
    componentDidMount() {
        const {id} = this.props;
        fakeFetch(id).then(response => {
            this.setState({
                name: response.name,
            });
        });
    }
    componentDidUpdate() {
        const {id} = this.props;
        fakeFetch(id).then(response => {
            this.setState({
                name: response.name,
            });
        });
    }
    render() {
        const {id} = this.props;
        return (
            <div>
                <span>
                    Fetcher {id}, name: {this.state.name}
                </span>
            </div>
        );
    }
}
class UpdateOnProps extends React.Component {
    state = {
        id: 0,
    };
    incrementId = () => {
        this.setState(state => ({
            id: state.id + 1,
        }));
    };
    render() {
        return (
            <div>
                <button onClick={this.incrementId}>Increment id</button>
                <Fetcher id={this.state.id} />
            </div>
        );
    }
}

ReactDOM.render(<UpdateOnProps />, document.getElementById('root'));

class ShowWindowSize extends React.Component {
    state = {
        width: window.innerWidth,
    };
    componentDidMount() {
        window.addEventListener('resize', this.updateSize);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateSize);
    }
    updateSize = () => {
        console.log('Updating');
        this.setState({
            width: window.innerWidth,
        });
    };
    render() {
        return <div>Window width {this.state.width}</div>;
    }
}
class WithUnMount extends React.Component {
    state = {
        hidden: false,
    };
    render() {
        return (
            <div>
                <button onClick={() => this.setState(state => ({hidden: !state.hidden}))}>
                    Toggle
                </button>
                {this.state.hidden && <ShowWindowSize />}
            </div>
        );
    }
}

// ReactDOM.render(<WithUnMount/>, document.getElementById('root'));
