import React from 'react';
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';
import Carousel from '../components/Carousel/Carousel';

const Home = ({currentUser, setCurrentUser}) => {
    return (
        <>
            <Register />
            <Login setCurrentUser={setCurrentUser}/>
            <Carousel />
        </>
    );
};

export default Home;