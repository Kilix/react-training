import * as React from 'react';

const useDataFetcher = (getData, parameters) => {
    const [state, dispatch] = React.useReducer(
        (state, action) => {
            switch (action.type) {
                case 'FETCH_DATA':
                    return {
                        isLoading: true,
                        data: null,
                    };
                case 'SUCCESS':
                    return {
                        isLoading: false,
                        data: action.payload,
                    };
                default:
                    throw new Error('The reducer of DataFetch was called with the wrong action');
            }
        },
        {
            isLoading: true,
            data: null,
        }
    );

    const fetchData = parameters => {
        if (parameters === null) return;
        dispatch({type: 'FETCH_DATA'});
        getData(parameters).then(results => {
            dispatch({
                type: 'SUCCESS',
                payload: results,
            });
        });
    };

    React.useEffect(
        () => {
            fetchData(parameters);
        },
        [parameters]
    );

    return {data: state.data, isLoading: state.isLoading};
};

export default useDataFetcher;
