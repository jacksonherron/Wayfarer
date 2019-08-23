import React from 'react';
import LandingContainer from '../containers/LandingContainer';
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';

const Landing = ({currentUser, setCurrentUser}) => {
    return (
        <>
            <LandingContainer />
            <button class="btn btn-primary btn-lg active" aria-pressed="true"><Register /></button>
            <button class="btn btn-primary btn-lg active" aria-pressed="true"><Login /></button>
        </>
    );
};

export default Landing;