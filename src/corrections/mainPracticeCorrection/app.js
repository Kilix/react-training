import '../../practice/main/style.css';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';

import {middlewares} from './libs/middlewares';
import reducer, {initialState} from './reducer';
import ArtistsList from './artistsList';
import ArtistCard from './artistCard';

class App extends Component {

    render() {
        return (
            <div className="app">
                <ArtistCard />
                <ArtistsList />
            </div>
        );
    }
}

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middlewares),
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
