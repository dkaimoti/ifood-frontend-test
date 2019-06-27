import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './styles.scss';
import { getPlaylists } from '../../actions/featuredPlaylists.actions';
import playlistIcon from './../../assets/images/playlist.svg'; 
import SpotifoodInput from './../SpotifoodInput';

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

    randomText() {
        const foods = ['pizza', 'hambúrguer', 'pastel', 'sorvete', 'salgados', 'doces', 'esfiha', 'churrasco'];
        return ` ${foods[Math.floor(Math.random()*foods.length)]}`;
    }

    render() {
        let message = '';

        if (!this.filteredPlaylistsByName().length) {
            message = <p className="playlists-no-results">Não foram encontrados resultados, por favor altere os campos de sua busca.</p>;
        }

        return (
            <div>
                <div className="filters-group">
                    <label className="filters-label">Filtrar por nome</label>
                    <SpotifoodInput  className="filters-input" onChangeField={this.onFilterByName} />
                </div>
                {message}
                <ul className="playlists">
                    {
                        this.filteredPlaylistsByName().map(playlist => {
                            const randomFood = this.randomText();
                            const playlistImage = playlist.images[0].url ? playlist.images[0].url : playlistIcon;
                            return <li className="playlists-item" key={`playlist-${playlist.id}`}>
                                    <a className="playlists-link playlists-spotify" href={playlist.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                                        <img className="playlists-icon" src={playlistImage} alt="{playlist.name} "/>
                                        <div className="playlists-info">
                                            <span>{playlist.name}</span>
                                            <small>{playlist.owner.display_name}</small> 
                                        </div>
                                    </a>
                                    <span className="playlists-total">Total de músicas: {playlist.tracks.total}</span>
                                    <a className="playlists-link playlists-ifood" href={`https://www.ifood.com.br/busca?q=${randomFood}`} target="_blank" rel="noopener noreferrer">
                                        <span>Que tal pedir <span className="playlists-food">{randomFood}</span> no Ifood enquanto escuta essa playlist?</span>                                    
                                    </a>
                                </li> 
                        })}
                </ul>
            </div>
        )
    }
}
const mapStateToProps = state => ({ playlists: state.lists.playlists ? state.lists.playlists.items : [], filterParameters: state.filtersValues});
const mapDispatchToProps = dispatch => bindActionCreators({ getPlaylists }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(FeaturedPlaylists);