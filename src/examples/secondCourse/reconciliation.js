import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';

class Fruit extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
    };

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.name !== this.props.name;
    }

    render() {
        const {name} = this.props;
        console.log('Render ' + name);
        return <div>{name}</div>;
    }
}
class Parent extends Component {
    state = {
        children: ['orange', 'peach'],
    };

    addRedInFirstPosition = () => this.setState({chidren: this.state.children.unshift('apple')});
    addGreenInLastPosition = () => this.setState({chidren: this.state.children.push('grapes')});

    render() {
        return (
            <div>
                {this.state.children.map((name, index) => (
                    <Fruit name={name} />
                ))}
                <button type="button" onClick={this.addRedInFirstPosition}>
                    Add apple in first position
                </button>
                <button type="button" onClick={this.addGreenInLastPosition}>
                    Add grapes in last position
                </button>
            </div>
        );
    }
}

ReactDOM.render(
    <Parent />,
    document.getElementById('root'),
)
