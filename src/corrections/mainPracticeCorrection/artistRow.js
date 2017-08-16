import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {formatNumberToString} from './helpers';
import {getArtistByName} from './selectors';
import * as actions from './actions';

const mapStateToArtistRowProps = (state, ownProps) => ({
    artist: getArtistByName(state, ownProps.artistName),
});
const mapDispatchToArtistRowProps = (dispatch) => ({
    openArtistCard: bindActionCreators(actions.openArtistCard, dispatch),
});

class ArtistRow extends Component {

    static propTypes = {
        artist: PropTypes.object.isRequired,
        artistName: PropTypes.string.isRequired,
        openArtistCard: PropTypes.func.isRequired,
    };

    openArtistCard = () => {
        const {artist, openArtistCard} = this.props;
        openArtistCard(artist.name);
        window.scrollTo(0, 0);
    }

    render() {
        const {artist} = this.props;
        const imgUrl = artist.image[0]['#text'];
        return (
            <tr className="artist-row">
                <td className="artist-row__image">
                    <img src={imgUrl} alt={artist.name} />
                </td>
                <td className="artist-row__name" onClick={this.openArtistCard}>
                    {artist.name}
                </td>
                <td>{formatNumberToString(artist.playcount)}</td>
                <td><a href={artist.url} target="_blank">{artist.url}</a></td>
            </tr>
        );
    }
}

const enhance = connect(mapStateToArtistRowProps, mapDispatchToArtistRowProps);
export default enhance(ArtistRow);
