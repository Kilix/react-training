import React from 'react';
import ReactDOM from 'react-dom';

import './jsx.css';

const Badge = ({active}) => (
    <div className={active === false ? 'inactive' : 'active'}>It's a badge</div>
);

const List = ({items}) => (
    <div>
        {items.length > 0 && <div>List:</div>}
        {items.length > 0 ? (
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        ) : (
            'It is empty!'
        )}
    </div>
);

const App = () => {
    const list = [1, 3, 5];
    const evenList = list.filter(i => i % 2 === 0);
    return (
        <div>
            There are {list.length + evenList.length} elements
            <List items={list} />
            <List items={evenList} />
            <Badge active />
            <Badge active={false} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
