import React from 'react';
import PropTypes from 'prop-types';

class DataFetcher extends React.Component {
    state = {
        isLoading: true,
        data: null,
    };
    static propTypes = {
        children: PropTypes.func.isRequired,
        getData: PropTypes.func.isRequired,
        parameters: PropTypes.any,
    };
    componentDidMount() {
        const {parameters} = this.props;
        this.fetchData(parameters);
    }
    componentDidUpdate(prevProps) {
        const {parameters} = this.props;
        if (prevProps.parameters !== parameters) {
            this.fetchData(parameters);
        }
    }
    fetchData = parameters => {
        const {getData} = this.props;
        if (parameters === null) return;
        this.setState(
            {
                isLoading: true,
            },
            () => {
                getData(parameters).then(results => {
                    this.setState(() => ({
                        isLoading: false,
                        data: results,
                    }));
                });
            }
        );
    };
    render() {
        const {children} = this.props;
        const {isLoading, data} = this.state;
        return children({data, isLoading});
    }
}
export default DataFetcher;
