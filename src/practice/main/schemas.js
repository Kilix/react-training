import {schema, normalize} from 'normalizr';
import R from 'ramda';

export const artist = new schema.Entity('artist');

const addIdToArtist = artist => R.assoc('id', artist.name, artist);

export const normalizeArtist = response => normalize(addIdToArtist(response), artist);
export const normalizeTopArtists = response => normalize(
    response.map(addIdToArtist),
    [artist]
);
