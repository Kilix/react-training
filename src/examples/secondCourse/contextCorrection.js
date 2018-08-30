import PropTypes from 'prop-types';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const getColorDecorator = WrappedComponent =>
    class extends Component {
        static contextTypes = {
            color: PropTypes.string,
        };

        render() {
            return <WrappedComponent color={this.context.color} {...this.props} />;
        }
    };

class Fruit extends Component {
    static propTypes = {
        color: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    };

    render() {
        const {color, name} = this.props;
        return <div style={{color}}>{name}</div>;
    }
}
const FruitWithColor = getColorDecorator(Fruit);
class List extends Component {
    render() {
        return (
            <div>
                {['apple', 'orange', 'peach'].map(fruit => (
                    <FruitWithColor key={fruit} name={fruit} />
                ))}
            </div>
        );
    }
}
class Parent extends Component {
    getChildContext() {
        return {color: 'green'};
    }

    static childContextTypes = {
        color: PropTypes.string,
    };

    render() {
        return <List />;
    }
}

ReactDOM.render(<Parent />, document.getElementById('root'));
