import React from 'react';
import {connect} from 'react-redux';

import * as actions from './actions';

const Buttons = ({dispatch}) => (
    <div>
        <button onClick={() => dispatch(actions.increment())}>Increment</button>
        <button onClick={() => dispatch(actions.decrement())}>Decrement</button>
    </div>
);
export default connect()(Buttons);
