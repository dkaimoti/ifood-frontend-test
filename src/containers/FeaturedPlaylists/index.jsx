import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getPlaylists } from '../../actions/featuredPlaylists.actions';
import SpotifoodInput from '../../components/SpotifoodInput';
import Playlists from './../../components/Playlists';

class FeaturedPlaylists extends Component {

    constructor() {
        super()
        this.state = {
            interval: null,
            name: ''
        }
        this.onFilterByName = this.onFilterByName.bind(this);
    }

    componentWillMount() {
        this.props.getPlaylists();
        this.setState({
            interval: setInterval(() => {
                this.props.getPlaylists();
            }, 30000)
        })
    }

    componentWillUnmount() {
        clearInterval(this.setState.interval);
        this.setState({ interval: null })
    }

    onFilterByName(e) {
        this.setState({ name: e.target.value });
    }

    filteredPlaylistsByName() {
        return this.props.playlists.filter(list => list.name.toLowerCase().indexOf(this.state.name.toLowerCase()) > -1);
    }

    render() {
        let message = '';
        if (!this.filteredPlaylistsByName().length) {
            message = <p className="playlists-no-results">Não foram encontrados resultados, por favor altere os campos de sua busca.</p>;
        }
        return (
            <div>
                <SpotifoodInput label="Filtrar por nome" className="filters-input" onChangeField={this.onFilterByName} />
                {message}
                <Playlists playlist={this.filteredPlaylistsByName()} />             
            </div>
        )
    }
}
const mapStateToProps = state => ({ playlists: state.lists.playlists ? state.lists.playlists.items : [], filterParameters: state.filtersValues});
const mapDispatchToProps = dispatch => bindActionCreators({ getPlaylists }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(FeaturedPlaylists);