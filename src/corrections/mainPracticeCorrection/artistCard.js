import PropTypes from 'prop-types';
import React from 'react';

import {getArtistInfoPromise} from '../../practice/main/libs/actionsHelpers';
import Card from './components/card';
import ThemeContext from './components/theme';
import DataFetcher from './components/dataFetcher';
import {formatNumberToString, getSimilarArtistsNames} from './helpers';
import Tag from './tag';

const ArtistCard = ({artistName}) => (
    <DataFetcher parameters={artistName} getData={getArtistInfoPromise}>
        {({isLoading, data: artist}) => {
            if (isLoading)
                return (
                    <Card>
                        <div className="loading">Loading</div>
                    </Card>
                );
            const imgUrl = artist.image[2]['#text'];
            const similarArtists = artist.similar && getSimilarArtistsNames(artist.similar);

            return (
                <ThemeContext.Provider value="pink">
                    <Card header={artistName}>
                        <div className="artist-card">
                            <div className="artist-card__main">
                                <a href={artist.url} target="_blank">
                                    <img src={imgUrl} alt={artist.name} />
                                </a>
                                <div className="artist-card__details">
                                    <div>
                                        Play count:{' '}
                                        {artist.stats &&
                                            formatNumberToString(artist.stats.playcount)}
                                    </div>
                                    {artist.bio && (
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: artist.bio.summary,
                                            }}
                                        />
                                    )}
                                    <div className="artist-card__tags">
                                        {artist.tags &&
                                            artist.tags.tag.map(tag => (
                                                <Tag key={tag.name} name={tag.name} />
                                            ))}
                                    </div>
                                </div>
                            </div>
                            <div>Similar Artists: {similarArtists}</div>
                        </div>
                    </Card>
                </ThemeContext.Provider>
            );
        }}
    </DataFetcher>
);
ArtistCard.propTypes = {
    artistName: PropTypes.string.isRequired,
};

export default ArtistCard;
