import React from 'react';
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';

const Home = ({currentUser, setCurrentUser}) => {
    return (
        <>
            <Register />
            <Login setCurrentUser={setCurrentUser}/>
        </>
    );
};

export default Home;