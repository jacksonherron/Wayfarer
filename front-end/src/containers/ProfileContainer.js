import React, { Component } from 'react';
import axios from 'axios';
import Profile from '../pages/Profile'
import { API_URL } from '../constants'

class ProfileContainer extends Component {
    state = {
        profile: {
            username: '',
            email: '',
            profile_photo: '',
            join_date: '',
            location: '',
       }
        // currentUser: this.props.currentUser
    };


    componentDidMount() {
        const userId = localStorage.getItem('uid');
        axios.get(`${API_URL}/users/${userId}`, { withCredentials: true })
            .then(res => this.setState({ profile: res.data.data }))
            .catch(err => console.log(err));
    };

    render() {
        return <Profile profile={this.state.profile} />
    };

};
    
export default ProfileContainer;