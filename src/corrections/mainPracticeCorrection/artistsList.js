import * as React from 'react';
import PropTypes from 'prop-types';

import {getTopArtistsPromise} from '../../practice/main/libs/actionsHelpers';
import {getArtistsList} from './helpers';
import Card from './components/card';
import ThemeContext from './components/theme';
import ArtistRow from './artistRow';
import SearchArtist from './searchArtist';
import useDataFetcher from './hooks.js';

const ArtistsList = ({openArtistCard}) => {
    const [favorites, setFavorites] = React.useState([]);
    const [onlyFavorites, setOnlyFavorites] = React.useState(false);
    const [search, setSearch] = React.useState('');
    const [sorted, sort] = React.useState(false);
    const {isLoading, data: artistsList} = useDataFetcher(getTopArtistsPromise);

    const sortByPlayCount = () => {
        sort(prevSort => !prevSort);
    };

    const filterFavorites = () => {
        setOnlyFavorites(prevOnlyFavorites => !prevOnlyFavorites);
    };

    const changeFavorite = (name, checked) => {
        setFavorites(prevFavorites =>
            checked ? [...prevFavorites, name] : prevFavorites.filter(favorite => favorite !== name)
        );
    };

    const artists = getArtistsList(
        artistsList || [],
        sorted,
        search,
        onlyFavorites ? favorites : null
    );

    const header = (
        <div>
            Top Artists
            <div style={{display: 'flex'}}>
                <SearchArtist search={search} searchArtist={setSearch} />
                <button style={{marginLeft: '5px'}} onClick={filterFavorites}>
                    {onlyFavorites ? 'Display all' : 'Display only favorites'}
                </button>
                <button style={{marginLeft: '5px'}} onClick={sortByPlayCount}>
                    {sorted ? 'Remove sorting' : 'Sort by play count'}
                </button>
            </div>
        </div>
    );

    return (
        <ThemeContext.Provider value="green">
            <Card header={header}>
                {isLoading ? (
                    <div className="loading">Loading</div>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th />
                                <th>Name</th>
                                <th>Play count</th>
                                <th>Link</th>
                                <th>Favorites ({favorites.length})</th>
                            </tr>
                        </thead>
                        <tbody>
                            {artists.map(artist => (
                                <ArtistRow
                                    key={artist.name}
                                    artist={artist}
                                    changeFavorite={changeFavorite}
                                    openArtistCard={openArtistCard}
                                    favorite={favorites.includes(artist.name)}
                                />
                            ))}
                        </tbody>
                    </table>
                )}
            </Card>
        </ThemeContext.Provider>
    );
};

ArtistsList.propTypes = {
    openArtistCard: PropTypes.func.isRequired,
};

export default ArtistsList;
