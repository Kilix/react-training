import PropTypes from 'prop-types';
import * as React from 'react';
import ReactDOM from 'react-dom';

class Fruit extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
    };

    render() {
        const {name} = this.props;
        return <div>{name}</div>;
    }
}
class List extends React.Component {
    render() {
        return (
            <div>
                {['apple', 'orange', 'peach'].map(fruit => (
                    <Fruit key={fruit} name={fruit} />
                ))}
            </div>
        );
    }
}
class Parent extends React.Component {
    render() {
        return <List />;
    }
}

ReactDOM.render(<Parent />, document.getElementById('root'));
