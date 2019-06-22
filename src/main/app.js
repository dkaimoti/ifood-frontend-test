import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './app.scss';
import Login from '../login/login';
import FeaturedPlaylists from '../featured-playlists/featured-playlists';
import FilterPlaylists from '../filter-playlists/filter-playlists';
import { updateUserState } from './../login/login-actions';

class App extends Component {

  render () {
    if(this.props.user.data.access_token) {
      return (
        <div>
          <div class="spotifood-header">
            <img class="spotifood-logo" src="spotifood-logo.png" alt=""/>
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
const mapStateToProps = state => ({ user: state.user });
const mapDispatchToProps = dispatch => bindActionCreators({ updateUserState }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(App);
