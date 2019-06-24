import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import './functionAsChild.css';

const SimpleList = ({elements, children}) => (
    <div className="simple-list">{elements.map((element, index) => children(element, index))}</div>
);

SimpleList.propTypes = {
    children: PropTypes.func.isRequired,
    elements: PropTypes.array.isRequired,
};

const Parent = () => (
    <SimpleList elements={['apple', 'peach', 'grapes']}>
        {(fruit, index) => (
            <div key={fruit}>
                <div>
                    Fruit n°
                    {index + 1}:
                </div>
                <div>{fruit}</div>
            </div>
        )}
    </SimpleList>
);

ReactDOM.render(<Parent />, document.getElementById('root'));
