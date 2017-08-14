import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './functionAsChild.css';

class SimpleList extends Component {
    static propTypes = {
        children: PropTypes.func.isRequired,
        elements: PropTypes.array.isRequired,
    };

    render() {
        const {elements, children} = this.props;
        return(
            <div className="simple-list">
                {elements.map((element, index) => children(element, index))}
            </div>
        );
    };
}
class Parent extends Component {
    render() {
        return (
            <SimpleList elements={['apple', 'peach', 'grapes']}>
                {(fruit, index) => (
                    <div key={fruit}>
                        <div>Fruit n°{index + 1}:</div>
                        <div>{fruit}</div>
                    </div>
                )}
            </SimpleList>
        );
    }
}

ReactDOM.render(
    <Parent />,
    document.getElementById('root'),
)
