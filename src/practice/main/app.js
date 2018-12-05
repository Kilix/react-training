import '../../practice/main/style.css';

import * as React from 'react';
import ReactDOM from 'react-dom';

import ArtistsList from './artistsList';

const App = () => (
    <div className="app">
        <ArtistsList openArtistCard={this.openArtistCard} />
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
