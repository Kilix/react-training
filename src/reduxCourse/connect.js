import React from 'react';

// first without mapStateToProps/mapDispatchToProps
// A function that takes a component, returns it with its props passed through + state + dispatch
// Get the store from context
// on mount, suscribe, on unmount unsubscribe
// In subscribe, forceUpdate

// Then move on with mapStateToProps => select the relevant portion of the state

const connect = BaseComponent => {
    return class Connect extends React.Component {
        render() {

        }
    };
};
