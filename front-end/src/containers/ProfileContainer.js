import React, { Component } from 'react';
import axios from 'axios';
import Profile from '../pages/Profile'
import { API_URL } from '../constants'
import ProfileForm from '../components/ProfileForm';

class ProfileContainer extends Component {
    state = {
        profile: {
            username: '',
            email: '',
            profile_photo: '',
            join_date: '',
            location: '',
       },
       formStyle: {
           display: 'none',
       }
       
        // currentUser: this.props.currentUser
    };

    toggleBodyForm = () => {
        this.state.formStyle.display === 'block'
        ? this.setState({ formStyle: {display: 'none'} })
        : this.setState({ formStyle: {display: 'block'} });

    }

    updateLocation = () => {
        const isUpdatedLocation = l => {
            return l._id === location._id;
        };


    componentDidMount() {
        const userId = localStorage.getItem('uid');
        axios.get(`${API_URL}/users/${userId}`, { withCredentials: true })
            .then(res => this.setState({ profile: res.data.data }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <>
            <Profile profile={this.state.profile} />

            <li data-location-index={this.state.location._id}>
            <div>
            <span className='profile-item'>{this.props.location.body}</span>
            <span className='edit' onClick={this.toggleBodyForm}>Edit</span>
            </div>
            <ProfileForm 
                location={this.props.location} 
                style={this.state.formStyle} 
                autoFocus={true}
                buttonName='Update Location!'
                updateLocation={this.props.updateLocation}
                toggleBodyForm={this.toggleBodyForm} 
            />
            </li>

            </>

        ) 

    };

};
    
export default ProfileContainer;