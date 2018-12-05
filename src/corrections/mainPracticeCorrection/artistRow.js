import PropTypes from 'prop-types';
import React from 'react';

import {formatNumberToString} from './helpers';

const ArtistRow = ({artist, changeFavorite, favorite, openArtistCard}) => {
    const openCard = () => {
        openArtistCard(artist.name);
        window.scrollTo(0, 0);
    };

    const imgUrl = artist.image[0]['#text'];

    return (
        <tr className="artist-row">
            <td className="artist-row__image">
                <img src={imgUrl} alt={artist.name} />
            </td>
            <td className="artist-row__name" onClick={openCard}>
                {artist.name}
            </td>
            <td>{formatNumberToString(artist.playcount)}</td>
            <td>
                <a href={artist.url} target="_blank">
                    {artist.url}
                </a>
            </td>
            <td style={{textAlign: 'center'}}>
                <input
                    type="checkbox"
                    onChange={e => changeFavorite(artist.name, e.target.checked)}
                    checked={favorite}
                />
            </td>
        </tr>
    );
};

ArtistRow.propTypes = {
    artist: PropTypes.object.isRequired,
    changeFavorite: PropTypes.func.isRequired,
    favorite: PropTypes.bool.isRequired,
    openArtistCard: PropTypes.func.isRequired,
};

export default ArtistRow;
