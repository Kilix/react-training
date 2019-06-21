import * as React from 'react';
import PropTypes from 'prop-types';

const SearchArtist = ({search, searchArtist}) => {
    const [searchMode, setSearchMode] = React.useState(false);

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

    return <button onClick={() => setSearchMode(true)}>Search an artist</button>;
};

SearchArtist.propTypes = {
    search: PropTypes.string.isRequired,
    searchArtist: PropTypes.func.isRequired,
};

export default SearchArtist;
