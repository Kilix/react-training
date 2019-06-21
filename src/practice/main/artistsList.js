import * as React from 'react';

import {getTopArtistsPromise} from './libs/actionsHelpers';
import {sortArtistsByPlayCount} from './helpers';
import Card from './components/card';
import ArtistRow from './artistRow';

const ArtistsList = () => {
    const [artistsList, setArtistList] = React.useState([]);
    const [sorted, sort] = React.useState(false);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        getTopArtistsPromise().then(artists => {
            setArtistList(artists);
            setLoading(false);
        });
    }, []);

    function sortByPlayCount() {
        sort(prevSort => !prevSort);
    }

    const sortMsg = sorted ? 'Remove sorting' : 'Sort by play count';
    const artists = sorted ? artistsList.sort(sortArtistsByPlayCount) : artistsList;

    const header = (
        <div>
            Top Artists
            <button onClick={sortByPlayCount}>{sortMsg}</button>
        </div>
    );

    return (
        <Card header={header}>
            {!loading ? (
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
            ) : (
                <div>Loading</div>
            )}
        </Card>
    );
};

export default ArtistsList;
