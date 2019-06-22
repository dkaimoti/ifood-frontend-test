import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './featured-playlists.scss';
import { getPlaylists } from './featured-playlists-actions';
import playlistIcon from './playlist.svg'; 

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
        this.props.getPlaylists(this.props.user.data.access_token, this.props.filterParameters)
        this.setState({
            interval: setInterval(() => {
                this.props.getPlaylists(this.props.user.data.access_token, this.props.filterParameters)
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
                <div class="filters-group">
                    <label className="filters-label">Filtrar por nome</label>
                    <input className="filters-input" type='text' onChange={this.onFilterByName} />
                </div>
                {message}
                <ul className="playlists">
                    {
                        this.filteredPlaylistsByName().map(playlist => {
                            let randomFood = this.randomText();
                            return <li className="playlists-item" key={`playlist-${playlist.id}`}>
                                    <a className="playlists-link" href={playlist.external_urls.spotify} target="_blank" rel="noopener">
                                        <img className="playlists-icon" src={playlistIcon} alt=""/>
                                        {playlist.name} 
                                    </a>
                                    <a className="playlists-link" href={`https://www.ifood.com.br/busca?q=${randomFood}`} target="_blank" rel="noopener">
                                        <span>Que tal pedir <span className="playlists-food">{randomFood}</span> no Ifood enquanto escuta essa playlist?</span>                                    
                                    </a>
                                </li> 
                        })}
                </ul>
            </div>
        )
    }
}
const mapStateToProps = state => ({ playlists: state.lists.playlists ? state.lists.playlists.items : [], filterParameters: state.filtersValues, user: state.user });
const mapDispatchToProps = dispatch => bindActionCreators({ getPlaylists }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(FeaturedPlaylists);