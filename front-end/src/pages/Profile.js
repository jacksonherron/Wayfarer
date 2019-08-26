import React, { Component } from 'react';
import axios from 'axios';
import ProfileContainer from '../containers/ProfileContainer';
import { API_URL } from '../constants';



class Profile extends Component {
    state = {
        profile: {
            username: '',
            email: '',
            profile_photo: '',
            join_date: '',
            location: '',
        },

           
        

        
    };



    componentDidMount() {
        const userId = localStorage.getItem('uid');
        axios.get(`${API_URL}/users/${userId}`, { withCredentials: true })
            .then(res => this.setState({ profile: res.data.data }))
            .catch(err => console.log(err));
    };




    render() {
        return (
        
            <ProfileContainer profile={this.state.profile}  />
            
            
            
            
        )
    }


}




export default Profile;
