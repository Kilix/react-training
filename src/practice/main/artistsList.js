import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import R from 'ramda';

import Card from './components/card';
import ArtistRow from './artistRow';
import * as actions from './actions';

const mapStateToArtistsListProps = state => ({
    artistsList: state.topArtists,
});
const mapDispatchToArtistsListProps = (dispatch) => ({
    getTopArtists: bindActionCreators(actions.getTopArtists, dispatch),
});

class ArtistsList extends Component {

    static propTypes = {
        artistsList: PropTypes.array.isRequired,
        getTopArtists: PropTypes.func.isRequired,
    };

    state = {
        sortByPlayCount: false,
    };

    componentWillMount() {
        this.props.getTopArtists();
    }

    sortFunction = (firstArtist, secondArtist) => secondArtist.playcount - firstArtist.playcount;

    sortByPlayCount = () => {
        this.setState({sortByPlayCount: !this.state.sortByPlayCount});
    }

    render() {
        const {artistsList} = this.props;
        const {sortByPlayCount} = this.state;
        const sortMsg = sortByPlayCount ? 'Remove sorting' : 'Sort by play count';
        const artists = sortByPlayCount
            ? R.sort(this.sortFunction, artistsList)
            : artistsList;

        const header = (
            <div>
                Top Artists
                <button onClick={this.sortByPlayCount}>{sortMsg}</button>
            </div>
        );

        return (
            <Card {...{header}}>
                <table>
                    <thead>
                        <tr>
                            <th />
                            <th>Name</th>
                            <th>Play count</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {artists.map(
                            artistName => <ArtistRow key={artistName} artistName={artistName} />
                        )}
                    </tbody>
                </table>
            </Card>
        );
    }
}

const enhance = connect(mapStateToArtistsListProps, mapDispatchToArtistsListProps);

export default enhance(ArtistsList);
