import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import './App.css';
import NavBar from './components/layout/NavBar';
import Routes from './config/routes'
import { API_URL } from './constants'

class App extends Component {
  state = { 
    currentUser: localStorage.getItem('uid')
  };

  setCurrentUser = (userId) => {
    localStorage.setItem('uid', userId)
    this.setState({ currentUser: userId })
  }

  handleLogout = () => {
    localStorage.removeItem('uid')
    axios.post(`${API_URL}/auth/logout`, { withCredentials: true })
      .then(() => {
        this.setState( {currentUser: null });
        this.props.history.push('/');
      })
  };


  render() {
    return (
      <>
        <NavBar logout={this.handleLogout} currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} />
        <Routes currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} history={this.props.history}/>
      </>
    );
  }
}

export default withRouter(App);
