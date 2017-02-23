import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Card from './components/card';
import {formateNumberToString} from './libs/helpers';
import {getSelectedArtist, getSelectedArtistName} from './selectors';
import Tag from './tag';
import * as actions from './actions';

const mapStateToArtistCardProps = state => ({
    artist: getSelectedArtist(state),
    selectedArtistName: getSelectedArtistName(state),
});
const mapDispatchToArtistCardProps = (dispatch) => ({
    getArtistInfo: bindActionCreators(actions.getArtistInfo, dispatch),
});

class ArtistCard extends Component {

    static propTypes = {
        artist: PropTypes.object,
        selectedArtistName: PropTypes.string,
        getArtistInfo: PropTypes.func.isRequired,
    };

    hasTag = musicStyle => {
        const {artist} = this.props;
        return artist.tags && artist.tags.tag.filter(tag => tag.name === musicStyle).length > 0;
    }

    getChildContext() {
        const {artist} = this.props;

        if (!artist)
            return {theme: 'default'};

        if (this.hasTag('rock'))
            return {theme: 'rock'};

        if (this.hasTag('rnb'))
            return {theme: 'rnb'};

        return {theme: 'default'};
    }

    static childContextTypes = {
        theme: PropTypes.string
    };

    componentWillReceiveProps(nextProps) {
        const {
            selectedArtistName,
            getArtistInfo,
        } = nextProps;

        if (selectedArtistName && this.props.selectedArtistName !== selectedArtistName)
            getArtistInfo(selectedArtistName);
    }

    render() {
        const {
            artist,
            selectedArtistName,
        } = this.props;

        if (!artist)
            return null;

        const imgUrl = artist.image[2]['#text'];
        const similarArtists = artist.similar && artist.similar.artist.map(artist => artist.name).join(', ');

        return (
            <Card header={selectedArtistName}>
                <div className="artist-card">
                    <div className="artist-card__main">
                        <a href={artist.url} target="_blank">
                            <img src={imgUrl} alt="" />
                        </a>
                        <div className="artist-card__details">
                            <div>Play count: {artist.stats && formateNumberToString(artist.stats.playcount)}</div>
                            {artist.bio &&
                                <div dangerouslySetInnerHTML={{__html: artist.bio.summary}} />
                            }
                            <div className="artist-card__tags">
                                {artist.tags && artist.tags.tag.map(tag =>
                                    <Tag key={tag.name} name={tag.name} />
                                )}
                            </div>
                        </div>
                    </div>
                    <div>Similar Artists: {similarArtists}</div>
                </div>
            </Card>
        );
    }
}

const enhance = connect(mapStateToArtistCardProps, mapDispatchToArtistCardProps);

export default enhance(ArtistCard);
