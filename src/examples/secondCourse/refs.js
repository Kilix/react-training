import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ComponentWithChildRef extends Component {
    focus = () => {
        this.textInput.focus();
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    ref={(input) => { this.textInput = input; }}
                />
                <button
                    type="button"
                    onClick={this.focus}
                >
                    Focus the text input
                </button>
            </div>
        );
    }
}

ReactDOM.render(
    <ComponentWithChildRef />,
    document.getElementById('root'),
)
