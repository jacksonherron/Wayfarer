import React from 'react';
import Carousel from '../components/Carousel/Carousel';
import Landing from '../components/Landing/Landing';


const Home = ({currentUser, setCurrentUser}) => {
    return (
        <>
            <Carousel />
            <Landing />
        </>
    );
};

export default Home;