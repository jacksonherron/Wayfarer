import React from 'react';
import LandingContainer from '../containers/LandingContainer';
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';

const Landing = () => {
    return (
        <>
            <LandingContainer />
            <button className="btn btn-primary btn-lg active"> <Register /></button>
            <button className="btn btn-primary btn-lg active"> <Login /></button>
        </>
    );
};

export default Landing;