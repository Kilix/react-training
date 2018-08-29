import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Provider extends Component {

    static propTypes = {
        children: PropTypes.node.isRequired,
        store: PropTypes.object.isRequired,
    }

    static childContextTypes = {
        store: PropTypes.object.isRequired,
    }

    getChildContext() {
        return {
            store: this.props.store,
        };
    }

    render() {
        return this.props.children;
    }
}

// Returns its children
// takes the store as a prop
// getChildContext & childContextTypes
// The children need to declare contextTypes since context is opt-in
