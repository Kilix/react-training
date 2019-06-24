import * as React from 'react';
import ReactDOM from 'react-dom';

const ComponentWithRef = () => {
    const textInput = React.useRef(null);

    const focusInput = () => {
        textInput.current.focus();
    };

    return (
        <div>
            <input type="text" ref={textInput} />
            <button type="button" onClick={focusInput}>
                Focus the text input
            </button>
        </div>
    );
};

ReactDOM.render(<ComponentWithRef />, document.getElementById('root'));
