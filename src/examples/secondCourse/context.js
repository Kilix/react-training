import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';

class Fruit extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
    };

    static contextTypes = {
        color: React.PropTypes.string
    };

    render() {
        return <div style={{color: this.context.color}}>{this.props.name}</div>;
    }
}
class List extends Component {
    render() {
        return (
            <div>{['apple', 'orange', 'peach'].map(fruit => <Fruit key={fruit} name={fruit}/>)}</div>
        );
    }
}
class Parent extends Component {
    getChildContext() {
        return {color: 'purple'};
    }

    static childContextTypes = {
        color: React.PropTypes.string
    };

    render() {
        return <List />;
    }
}

ReactDOM.render(
    <Parent />,
    document.getElementById('root'),
)
