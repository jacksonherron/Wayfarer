import React from 'react';
import LandingContainer from '../containers/LandingContainer';
import Footer from '../components/layout/Footer';


const Landing = ({ currentUser, setCurrentUser }) => {
    const buttons = (
        <>
            <button className="btn btn-primary btn-lg active landingbtn" aria-pressed="true" data-toggle="modal" data-target="#registerModal">Register</button>
            <button className="btn btn-primary btn-lg active landingbtn" aria-pressed="true" data-toggle="modal" data-target="#loginModal">Login</button>
        </>
    )

    return (
        <>
            <LandingContainer />
            {currentUser ? null : buttons}
            <Footer />

        </>
    );
};

export default Landing;