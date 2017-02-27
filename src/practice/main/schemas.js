import {schema, normalize} from 'normalizr';

export const artist = new schema.Entity('artist', {}, {idAttribute: 'name'});

export const normalizeArtist = response => normalize(response, artist);
export const normalizeTopArtists = response => normalize(response, [artist]);
