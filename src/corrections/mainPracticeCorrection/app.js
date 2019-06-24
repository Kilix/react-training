import '../../practice/main/style.css';

import * as React from 'react';
import ReactDOM from 'react-dom';

import ArtistsList from './artistsList';
import ArtistCard from './artistCard';

const App = () => {
    const [openedCard, openCard] = React.useState(null);

    return (
        <div className="app">
            {openedCard && <ArtistCard artistName={openedCard} />}
            <ArtistsList openArtistCard={openCard} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
