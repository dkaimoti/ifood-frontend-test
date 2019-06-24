import React, { Component } from 'react';

import './app.scss';
import Login from './../login/login';
import FeaturedPlaylists from './../featured-playlists/featured-playlists';
import FilterPlaylists from './../filter-playlists/filter-playlists';
import spotifoodLogo from './../../assets/spotifood-logo.png';

class App extends Component {

  constructor() {
    super()
    this.state = {
      user: ''
    }
  }

  componentDidMount() {
    this.setState({user:JSON.parse(localStorage.getItem('spotifood-user'))});
  }

  render () {
    if(this.state.user && this.state.user.access_token) {
      return (
        <div>
          <div className="spotifood-header">
            <img className="spotifood-logo" src={spotifoodLogo} alt=""/>
            <FilterPlaylists></FilterPlaylists>
          </div>
          <FeaturedPlaylists></FeaturedPlaylists>
        </div>
      )
    } else {
      return (
        <Login />
      )
    }
  }
}
export default App;
