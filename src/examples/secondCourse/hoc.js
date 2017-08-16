import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const withWindowSize = (WrappedComponent) => class extends Component {
    state = { large: window.innerWidth > 1025 };

    componentDidMount() {
        console.log(WrappedComponent.name + ' did mount');
        window.addEventListener('resize', this.update);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.update);
    }

    update = () => {
        const {large} = this.state;

        if ((window.innerWidth > 1025) !== large)
            this.setState({large: !large});
    }

    render() {
        return <WrappedComponent large={this.state.large} {...this.props} />;
    }
};

class List extends Component {
    static propTypes = {
        elements: PropTypes.array.isRequired,
        large: PropTypes.bool.isRequired,
    };

    render() {
        const {elements} = this.props;
        return (
            <div>{elements.map(element => <div key={element}>{element}</div>)}</div>
        );
    }
}
class Button extends Component {
    static propTypes = {
        large: PropTypes.bool.isRequired,
    };

    render() {
        const buttonLabel = this.props.large ? 'Add a fruit in the list' : 'Add';
        return (
            <button type="button">{buttonLabel}</button>
        );
    }
}

const ListWithWindowSize = withWindowSize(List);
const ButtonWithWindowSize = withWindowSize(Button);

class Parent extends Component {
    render() {
        return (
            <div>
                <ListWithWindowSize elements={['orange', 'grapes']} />
                <ButtonWithWindowSize />
            </div>
        );
    }
}

ReactDOM.render(
    <Parent />,
    document.getElementById('root'),
)
