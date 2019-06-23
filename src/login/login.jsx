import React, { Component } from 'react';
import queryString from 'query-string';

import './login.scss';

class Login extends Component {

  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  
  componentDidMount() {
    const user = queryString.parse(window.location.hash);
    if(user.access_token) {
        localStorage.setItem('spotifood-user', JSON.stringify(user));
    }
  }

  handleClick () {
    window.location.assign(process.env.REACT_APP_SPOTIFY_AUTH_SERVER);
  }

  render () {
    return (
        <div className="spotifood-container">
          <img className="spotifood-logo" src="spotifood-logo.png" alt="Spotifood"/>
          <h1 className="spotifood-welcome">Bem-vindo ao Spotifood!</h1>
          <p className="spotifood-description">Veja as sugestões de playlist do Spotify para acompanhar sua comida favorita entregue pelo Ifood!</p>
          <p className="spotifood-description">Para iniciar, por favor acesse sua conta no spotify.</p>
          <button className='spotifood-button-spotify' onClick={this.handleClick}>Acessar Spotify</button>
        </div>
      )
  }
}
export default Login;
