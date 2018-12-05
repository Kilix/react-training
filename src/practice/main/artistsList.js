import React, {Component} from 'react';

import {getTopArtistsPromise} from '../../practice/main/libs/actionsHelpers';
import {sortArtistsByPlayCount} from './helpers';
import Card from './components/card';
import ArtistRow from './artistRow';

class ArtistsList extends Component {
    state = {
        artistsList: [],
        sorted: false,
    };

    componentDidMount() {
        getTopArtistsPromise().then(artists => this.setState(() => ({artistsList: artists})));
    }

    sortByPlayCount() {
        this.setState(prevState => ({sorted: !prevState.sorted}));
    }

    render() {
        const {artistsList, sorted} = this.state;
        const sortMsg = sorted ? 'Remove sorting' : 'Sort by play count';
        const artists = sorted ? artistsList.sort(sortArtistsByPlayCount) : artistsList;

        const header = (
            <div>
                Top Artists
                <button onClick={this.sortByPlayCount}>{sortMsg}</button>
            </div>
        );

        return (
            <Card header={header}>
                <table>
                    <thead>
                        <tr>
                            <th />
                            <th>Name</th>
                            <th>Play count</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {artists.map(artist => (
                            <ArtistRow key={artist.name} artist={artist} />
                        ))}
                    </tbody>
                </table>
            </Card>
        );
    }
}

export default ArtistsList;
