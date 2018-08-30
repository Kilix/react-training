import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ComponentWithEvent extends Component {
    onClick = event => {};

    render() {
        return (
            <button type="button" onClick={this.onClick}>
                Click me!
            </button>
        );
    }
}

ReactDOM.render(<ComponentWithEvent />, document.getElementById('root'));
