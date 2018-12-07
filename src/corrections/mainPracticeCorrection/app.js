import '../../practice/main/style.css';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import ArtistsList from './artistsList';
import ArtistCard from './artistCard';

class App extends Component {
    state = {openedCard: null};

    openArtistCard = artistName => {
        this.setState(() => ({openedCard: artistName}));
    };

    render() {
        const {openedCard} = this.state;
        return (
            <div className="app">
                {openedCard && <ArtistCard artistName={openedCard} />}
                <ArtistsList openArtistCard={this.openArtistCard} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
