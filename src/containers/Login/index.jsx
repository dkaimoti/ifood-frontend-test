import React, { Component } from 'react';
import queryString from 'query-string';

import Welcome from './../../components/Welcome';

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
        <Welcome onClick={this.handleClick} />
      )
  }
}
export default Login;
