import React from 'react';
import Landing from '../components/Landing/Landing';
import Carousel from '../components/Carousel/Carousel';
import Footer from '../components/layout/Footer';


const LandingContainer = () => {
    return(
        <>
        <Carousel />
        <Landing />
        <Footer />
        
        </>
    )
}

export default LandingContainer;