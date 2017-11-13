import PropTypes from 'prop-types';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ComponentWithPropTypes extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
    };
    render() {
        return <div>It has a name {this.props.name}</div>;
    }
}
class ComponentWithDefaultName extends Component {
    static defaultProps = {
        name: 'but it is a default one',
    };
    render() {
        return <div>It has a name {this.props.name}</div>;
    }
}

const App = () => (
    <div>
        <div className="propTypes">
            <ComponentWithPropTypes />
            <ComponentWithPropTypes name="and it's a cool one" />
        </div>
        <div className="defaultProps">
            <ComponentWithDefaultName />
            <ComponentWithDefaultName name="that can be overwritten" />
        </div>
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
