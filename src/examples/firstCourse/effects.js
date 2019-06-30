import React from 'react';
import ReactDOM from 'react-dom';

const fakeFetch = id =>
    new Promise(resolve => {
        setTimeout(() => {
            resolve({id, name: `Id-${id}`});
        }, 1000);
    });

const Fetcher = ({id}) => {
    const [name, setName] = React.useState(null);
    React.useEffect(
        () => {
            fakeFetch(id).then(response => {
                setName(response.name);
            });
        },
        [id]
    );

    return (
        <div>
            <span>
                Fetcher {id}, name: {name}
            </span>
        </div>
    );
};
const UpdateOnProps = () => {
    const [id, setId] = React.useState(0);

    return (
        <div>
            <button onClick={() => setId(id + 1)}>Increment id</button>
            <Fetcher id={id} />
        </div>
    );
};

ReactDOM.render(<UpdateOnProps />, document.getElementById('root'));

const logSize = () => {
    console.log(`updating, window size is ${window.innerWidth}`);
};

const ShowWindowSize = () => {
    React.useEffect(() => {
        window.addEventListener('resize', logSize);
        return () => {
            window.removeEventListener('resize', logSize);
        };
    });

    return <div>Resize to log the window size</div>;
};
const WithUnMount = () => {
    const [hidden, setHidden] = React.useState(false);
    return (
        <div>
            <button onClick={() => setHidden(!hidden)}>Toggle</button>
            {hidden && <ShowWindowSize />}
        </div>
    );
};

// ReactDOM.render(<WithUnMount />, document.getElementById('root'));
