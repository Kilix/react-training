import createLogger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';

export const middlewares = [
    createLogger({collapsed: true}),
    promiseMiddleware({
        promiseTypeSuffixes: ['PENDING', 'SUCCESS', 'ERROR'],
    }),
];
