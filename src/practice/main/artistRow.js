import PropTypes from 'prop-types';
import React from 'react';

import {formatNumberToString} from './helpers';

const ArtistRow = ({artist}) => {
    const imgUrl = artist.image[0]['#text'];

    return (
        <tr className="artist-row">
            <td className="artist-row__image">
                <img src={imgUrl} alt={artist.name} />
            </td>
            <td className="artist-row__name">{artist.name}</td>
            <td>{formatNumberToString(artist.playcount)}</td>
            <td>
                <a href={artist.url} target="_blank">
                    {artist.url}
                </a>
            </td>
        </tr>
    );
};

ArtistRow.propTypes = {
    artist: PropTypes.object.isRequired,
};

export default ArtistRow;
