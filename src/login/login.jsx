import React, { Component } from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { updateUserState } from './login-actions';
import './login.scss';

class Login extends Component {

  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  
  componentDidMount() {
    const user = queryString.parse(window.location.hash);
    if(user) {
        this.props.updateUserState(user);
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
const mapStateToProps = state => ({ access_token: state.user.access_token });
const mapDispatchToProps = dispatch => bindActionCreators({ updateUserState }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Login);
