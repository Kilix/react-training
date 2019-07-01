import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

const ComponentWithDefaultName = ({name = 'but it is a default one'}) => {
    return <div>It has a name {name}</div>;
};
const ComponentWithPropTypes = ({name}) => {
    return <div>It has a name {name}</div>;
};
// This functions only at runtime
ComponentWithPropTypes.propTypes = {
    name: PropTypes.string.isRequired,
};

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
