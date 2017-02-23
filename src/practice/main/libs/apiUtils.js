import request from 'superagent-bluebird-promise';
const rootUrl = 'http://ws.audioscrobbler.com/2.0/?';
const apiKeyParam = '&api_key=53748757ae40086c5c071e758d7a39af&format=json';

const get = (params = {}) =>
    request
        .get(rootUrl + params + apiKeyParam)
        .promise()
        .then(({body}) => body);

export {
    get,
};
