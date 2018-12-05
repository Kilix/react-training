import React from 'react';
import PropTypes from 'prop-types';

class SearchArtist extends React.Component {
    state = {searchMode: false};

    static propTypes = {
        search: PropTypes.string.isRequired,
        searchArtist: PropTypes.func.isRequired,
    };

    setSearchMode = () => {
        this.setState(() => ({searchMode: true}));
    };

    render() {
        const {search, searchArtist} = this.props;
        const {searchMode} = this.state;

        if (searchMode) {
            return (
                <input
                    autoFocus
                    placeholder="Type a name..."
                    onChange={e => {
                        searchArtist(e.target.value);
                    }}
                    value={search}
                />
            );
        }

        return <button onClick={this.setSearchMode}>Search an artist</button>;
    }
}

export default SearchArtist;
