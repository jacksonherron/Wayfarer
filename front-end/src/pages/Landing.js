import React from 'react';
import LandingContainer from '../containers/LandingContainer';
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';

const Landing = ({currentUser, setCurrentUser}) => {
    const buttons = (
        <>
            <button class="btn btn-primary btn-lg active" aria-pressed="true" data-toggle="modal" data-target="#registerModal">Register</button>
            <button class="btn btn-primary btn-lg active" aria-pressed="true" data-toggle="modal" data-target="#loginModal">Login</button>
        </>
    )

    return (
        <>
            <LandingContainer />
            { currentUser ? null : buttons}
        </>
    );
};

export default Landing;