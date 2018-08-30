import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ComponentWithEvent extends Component {
    onClick = event => {
        console.log('Synthetic event type: ', event.type);
        const eventType = event.type;

        setTimeout(function() {
            console.log('Asynchronous synthetic event type: ', event.type);
            console.log('eventType variable: ', eventType);
        }, 0);
    };

    render() {
        return (
            <button type="button" onClick={this.onClick}>
                Click me!
            </button>
        );
    }
}

ReactDOM.render(<ComponentWithEvent />, document.getElementById('root'));
