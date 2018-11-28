import * as React from 'react';
import ReactDOM from 'react-dom';

class ComponentWithRef extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }

    focus = () => {
        this.textInput.current.focus();
    };

    render() {
        return (
            <div>
                <input type="text" ref={this.textInput} />
                <button type="button" onClick={this.focus}>
                    Focus the text input
                </button>
            </div>
        );
    }
}

ReactDOM.render(<ComponentWithRef />, document.getElementById('root'));
