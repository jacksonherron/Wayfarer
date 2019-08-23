import React from 'react';
// import ProfileContainer from '../containers/ProfileContainer';

const Profile = ({ profile: { username , email, profile_photo, join_date, location}}) => {
    return (
        <div>
            <p><strong>Username</strong> {username}</p>
            <p><strong>Email</strong> {email}</p> 
            <p><strong>Photo</strong> {profile_photo}</p>  
            <p><strong>Join Date</strong> {join_date}</p> 
            <p><strong>Location</strong> {location}</p>
        </div>

    );
};

export default Profile;