import createLogger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';

export const middleware = [
    createLogger({collapsed: true}),
    promiseMiddleware({
        promiseTypeSuffixes: ['PENDING', 'SUCCESS', 'ERROR'],
    }),
];
