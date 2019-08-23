import React from 'react';
import ProfileContainer from '../containers/ProfileContainer';

const Profile = ({ profile: { username , email, profile_photo, join_date, location}}) => {
    return (
        <div>
            <p><strong>Username</strong></p>
            <p><strong>Email</strong></p> 
            <p><strong>Photo</strong></p>  
            <p><strong>Join Date</strong></p> 
            <p><strong>Location</strong></p> 
        </div>

    );
};

export default Profile;