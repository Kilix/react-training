import * as React from 'react';
import PropTypes from 'prop-types';

const DataFetcher = ({children, getData, parameters}) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [data, setData] = React.useState(null);

    const fetchData = parameters => {
        if (parameters === null) return;
        setIsLoading(true);
        getData(parameters).then(results => {
            setData(results);
            setIsLoading(false);
        });
    };

    React.useEffect(
        () => {
            fetchData(parameters);
        },
        [parameters]
    );

    return children({data, isLoading});
};

DataFetcher.propTypes = {
    children: PropTypes.func.isRequired,
    getData: PropTypes.func.isRequired,
    parameters: PropTypes.any,
};

export default DataFetcher;
