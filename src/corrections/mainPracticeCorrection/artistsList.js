import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import R from 'ramda';

import {getTopArtistsWithInfo} from './selectors';
import {sortArtistsByPlayCount} from './helpers';
import Card from './components/card';
import ArtistRow from './artistRow';
import * as actions from './actions';

const mapStateToArtistsListProps = state => ({
    artistsList: getTopArtistsWithInfo(state),
});
const mapDispatchToArtistsListProps = {
    getTopArtists: actions.getTopArtists,
};

class ArtistsList extends Component {
    static propTypes = {
        artistsList: PropTypes.array.isRequired,
        getTopArtists: PropTypes.func.isRequired,
    };

    state = {
        sorted: false,
    };

    componentWillMount() {
        this.props.getTopArtists();
    }

    sortByPlayCount = () => {
        this.setState({sorted: !this.state.sorted});
    };

    render() {
        const {artistsList} = this.props;
        const {sorted} = this.state;
        const sortMsg = sorted ? 'Remove sorting' : 'Sort by play count';
        const artists = sorted ? R.sort(sortArtistsByPlayCount, artistsList) : artistsList;

        const header = (
            <div>
                Top Artists
                <button onClick={this.sortByPlayCount}>{sortMsg}</button>
            </div>
        );

        return (
            <Card header={header}>
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
                        {artists.map(({name}) => (
                            <ArtistRow key={name} artistName={name} />
                        ))}
                    </tbody>
                </table>
            </Card>
        );
    }
}

const enhance = connect(
    mapStateToArtistsListProps,
    mapDispatchToArtistsListProps
);

export default enhance(ArtistsList);
