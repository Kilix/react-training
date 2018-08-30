import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
    counter: state,
});
const Counter = ({counter}) => <div>{counter}</div>;
export default connect(mapStateToProps)(Counter);
