import PropTypes from 'prop-types';
import React, {Component} from 'react';

import {getArtistInfoPromise} from '../../practice/main/libs/actionsHelpers';
import Card from './components/card';
import {formatNumberToString, hasTag, getSimilarArtistsNames} from './helpers';
import Tag from './tag';

class ArtistCard extends Component {
    static propTypes = {
        artistName: PropTypes.string,
    };

    state = {artist: null};

    getChildContext() {
        const {artist} = this.props;

        if (!artist || !artist.tags) return {theme: 'default'};

        if (hasTag('rock', artist.tags)) return {theme: 'rock'};

        if (hasTag('rnb', artist.tags)) return {theme: 'rnb'};

        return {theme: 'default'};
    }

    static childContextTypes = {
        theme: PropTypes.string,
    };

    componentWillReceiveProps(nextProps) {
        const {artistName} = nextProps;

        if (artistName && this.props.artistName !== artistName)
            getArtistInfoPromise(artistName).then(artist => this.setState(() => ({artist})));
    }

    render() {
        const {artistName} = this.props;
        const {artist} = this.state;

        if (!artist) return null;

        const imgUrl = artist.image[2]['#text'];
        const similarArtists = artist.similar && getSimilarArtistsNames(artist.similar);

        return (
            <Card header={artistName}>
                <div className="artist-card">
                    <div className="artist-card__main">
                        <a href={artist.url} target="_blank">
                            <img src={imgUrl} alt={artist.name} />
                        </a>
                        <div className="artist-card__details">
                            <div>
                                Play count:{' '}
                                {artist.stats && formatNumberToString(artist.stats.playcount)}
                            </div>
                            {artist.bio && (
                                <div dangerouslySetInnerHTML={{__html: artist.bio.summary}} />
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
        );
    }
}

export default ArtistCard;
