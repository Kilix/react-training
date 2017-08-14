// Classic context for Fruit color
// => HOC
import PropTypes from 'prop-types';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Fruit extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
    };

    render() {
        const {name} = this.props;
        return <div>{name}</div>;
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
    render() {
        return <List />;
    }
}

ReactDOM.render(
    <Parent />,
    document.getElementById('root'),
)
