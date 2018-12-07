import * as React from 'react';
import PropTypes from 'prop-types';

import {getTopArtistsPromise} from '../../practice/main/libs/actionsHelpers';
import {getArtistsList} from './helpers';
import Card from './components/card';
import {ThemeProvider} from './components/theme';
import ArtistRow from './artistRow';
import SearchArtist from './searchArtist';
import DataFetcher from './components/dataFetcher';

class ArtistsList extends React.Component {
    static propTypes = {
        openArtistCard: PropTypes.func.isRequired,
    };

    state = {
        favorites: [],
        onlyFavorites: false,
        search: '',
        sorted: false,
    };

    sortByPlayCount = () => {
        this.setState(prevState => ({sorted: !prevState.sorted}));
    };

    searchArtist = name => {
        this.setState(() => ({search: name}));
    };

    filterFavorites = () => {
        this.setState(prevState => ({onlyFavorites: !prevState.onlyFavorites}));
    };

    changeFavorite = (name, checked) => {
        this.setState(prevState => ({
            favorites: checked
                ? [...prevState.favorites, name]
                : prevState.favorites.filter(favorite => favorite !== name),
        }));
    };

    render() {
        const {openArtistCard} = this.props;
        const {favorites, onlyFavorites, search, sorted} = this.state;

        return (
            <DataFetcher getData={getTopArtistsPromise}>
                {({isLoading, data: artistsList}) => {
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
                                <SearchArtist search={search} searchArtist={this.searchArtist} />
                                <button style={{marginLeft: '5px'}} onClick={this.filterFavorites}>
                                    {onlyFavorites ? 'Display all' : 'Display only favorites'}
                                </button>
                                <button style={{marginLeft: '5px'}} onClick={this.sortByPlayCount}>
                                    {sorted ? 'Remove sorting' : 'Sort by play count'}
                                </button>
                            </div>
                        </div>
                    );

                    return (
                        <ThemeProvider value="green">
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
                                                    changeFavorite={this.changeFavorite}
                                                    openArtistCard={openArtistCard}
                                                    favorite={favorites.includes(artist.name)}
                                                />
                                            ))}
                                        </tbody>
                                    </table>
                                )}
                            </Card>
                        </ThemeProvider>
                    );
                }}
            </DataFetcher>
        );
    }
}

export default ArtistsList;
