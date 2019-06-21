import PropTypes from 'prop-types';
import * as React from 'react';
import ReactDOM from 'react-dom';

const withWindowSize = WrappedComponent => props => {
    const [large, setSize] = React.useState(window.innerWidth > 1025);

    React.useEffect(() => {
        console.log(WrappedComponent.name + ' did mount');
        window.addEventListener('resize', update);

        return () => {
            window.removeEventListener('resize', update);
        };
    }, []);

    const update = () => {
        setSize(window.innerWidth > 1025);
    };

    return <WrappedComponent large={large} {...props} />;
};

const List = ({elements, large}) => (
    <div>
        {elements.map(element => (
            <div key={element} style={{textTransform: large ? 'uppercase' : 'capitalize'}}>
                {element}
            </div>
        ))}
    </div>
);

List.propTypes = {
    elements: PropTypes.array.isRequired,
    large: PropTypes.bool.isRequired,
};

const Button = ({large}) => {
    const buttonLabel = large ? 'Add a fruit in the list' : 'Add';
    return <button type="button">{buttonLabel}</button>;
};

Button.propTypes = {
    large: PropTypes.bool.isRequired,
};

const ListWithWindowSize = withWindowSize(List);
const ButtonWithWindowSize = withWindowSize(Button);

const Parent = () => (
    <div>
        <ListWithWindowSize elements={['orange', 'grapes']} />
        <ButtonWithWindowSize />
    </div>
);

ReactDOM.render(<Parent />, document.getElementById('root'));
