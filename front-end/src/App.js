import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import './App.css';
import NavBar from './components/layout/NavBar';
import Routes from './config/routes'
import { API_URL } from './constants'

class App extends Component {
  state = { 
    currentUser: 'Jackson'
    // currentUser: localStorage.getItem('uid')
  };

  setCurrentUser = (userId) => {
    localStorage.setItem('uid', userId)
    this.setState({ currentUser: userId })
  }

  handleLogout = () => {
    axios.post(`${API_URL}/auth/logout`, { withCredentials: true })
      .then(() => {
        this.setState( {currentUser: null })
      })
      .catch((err) => console.log(err))
  };


  render() {
    return (
      <>
        <NavBar logout={this.handleLogout} currentUser={this.state.currentUser} />
        <Routes currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} history={this.props.history}/>
      </>
    );
  }
}

export default withRouter(App);
