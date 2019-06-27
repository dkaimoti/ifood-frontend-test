import React, { Component } from 'react';

import './styles.scss';
import spotifoodLogo from './../../assets/images/spotifood-logo.png';

class Welcome extends Component {
    render () {
        return (
            <div className="spotifood-container">
              <img className="spotifood-logo" src={spotifoodLogo} alt="Spotifood"/>
              <h1 className="spotifood-welcome">Bem-vindo ao Spotifood!</h1>
              <p className="spotifood-description">Veja as sugestões de playlist do Spotify para acompanhar sua comida favorita entregue pelo Ifood!</p>
              <p className="spotifood-description">Para iniciar, por favor acesse sua conta no spotify.</p>
              <button className='spotifood-button-spotify' onClick={this.props.onClick}>Acessar Spotify</button>
            </div>
          )
      }
}
export default Welcome;