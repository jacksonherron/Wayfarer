import React, { Component } from 'react';
import axios from 'axios';
import Profile from '../pages/Profile'
import { API_URL } from '../constants'
import ProfileForm from '../components/ProfileForm';
import UserModel from '../models/UserModel';

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

    updateLocation = (location) => {
        const userId = localStorage.getItem('uid');
        // const isUpdatedLocation = l => {
        //     return l._id === this.profile._id;
        // };
        const user = this.state.profile;
        user.location = location;

        UserModel.update(userId, user)
            .then((res) => {
                // let location = this.state.profile.location;
                // this.profile.find(isUpdatedLocation).body = this.location.body;
                this.setState({ profile: res.data.profile });
            });
    }

    componentDidMount() {
        this.fetchData();
    };

    fetchData = () => {
        const userId = localStorage.getItem('uid');
        UserModel.index(userId)
            .then((res) => {
                console.log(res);
                this.setState({
                    profile: res.data.profile,
                });
            })
            .catch((err) => console.log(err))}
    
    // fetchData = () => {
    //     UserModel.create().then((res) => {
    //         this.setState ({
    //             location: res.data.profile,
    //         });
    //     });
    // };
  
    render() {
        console.log('Container State', this.state)
        return (
            <>
            <Profile profile={this.state.profile} />

            <li data-location-index={this.state.profile._id}>
            <div>
            <span className='profile-item'>{this.props.location.body}</span>
            <span className='edit' onClick={this.toggleBodyForm}>Edit</span>
            </div>
            <ProfileForm 
                location={this.props.location} 
                style={this.state.formStyle} 
                autoFocus={true}
                buttonName='Update Location!'
                updateLocation={this.updateLocation}
                toggleBodyForm={this.toggleBodyForm} 
            />
            </li>

            </>

        ) 

    };

};
    
export default ProfileContainer;