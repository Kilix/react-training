import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Card from './components/card';
import {formatNumberToString, hasTag, getSimilarArtistsNames} from './helpers';
import {getSelectedArtist, getSelectedArtistName} from './selectors';
import Tag from './tag';
import * as actions from './actions';

const mapStateToArtistCardProps = state => ({
    artist: getSelectedArtist(state),
    selectedArtistName: getSelectedArtistName(state),
});
const mapDispatchToArtistCardProps = {
    getArtistInfo: actions.getArtistInfo,
};

class ArtistCard extends Component {
    static propTypes = {
        artist: PropTypes.object,
        selectedArtistName: PropTypes.string,
        getArtistInfo: PropTypes.func.isRequired,
    };

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
        const {selectedArtistName, getArtistInfo} = nextProps;

        if (selectedArtistName && this.props.selectedArtistName !== selectedArtistName)
            getArtistInfo(selectedArtistName);
    }

    render() {
        const {artist, selectedArtistName} = this.props;

        if (!artist) return null;

        const imgUrl = artist.image[2]['#text'];
        const similarArtists = artist.similar && getSimilarArtistsNames(artist.similar);

        return (
            <Card header={selectedArtistName}>
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

const enhance = connect(
    mapStateToArtistCardProps,
    mapDispatchToArtistCardProps
);

export default enhance(ArtistCard);
