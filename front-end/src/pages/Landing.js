import React from 'react';
import LandingContainer from '../containers/LandingContainer';
// import Register from '../components/auth/Register';
// import Login from '../components/auth/Login';

const Landing = ({currentUser, setCurrentUser}) => {
    const buttons = (
        <>
            <button className="btn btn-primary btn-lg active" aria-pressed="true" data-toggle="modal" data-target="#registerModal">Register</button>
            <button className="btn btn-primary btn-lg active" aria-pressed="true" data-toggle="modal" data-target="#loginModal">Login</button>
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