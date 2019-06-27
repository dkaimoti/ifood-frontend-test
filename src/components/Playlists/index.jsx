import React, { Component } from 'react';

import './styles.scss';
import playlistIcon from './../../assets/images/playlist.svg'; 

class Playlists extends Component {

    randomText() {
        const foods = ['pizza', 'hambúrguer', 'pastel', 'sorvete', 'salgados', 'doces', 'esfiha', 'churrasco'];
        return ` ${foods[Math.floor(Math.random()*foods.length)]}`;
    }

    render() {
        return (
            <ul className="playlists">
                {
                    this.props.playlist.map(playlist => {
                        const randomFood = this.randomText();
                        const playlistImage = playlist.images[0].url ? playlist.images[0].url : playlistIcon;
                        return <li className="playlists-item" key={`playlist-${playlist.id}`}>
                                <a className="playlists-link playlists-spotify" href={playlist.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                                    <img className="playlists-icon" src={playlistImage} alt={playlist.name} />
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
        )
    }
}
export default Playlists;