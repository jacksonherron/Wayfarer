import React, { Component } from 'react';
import Cities from '../components/Cities/Cities';
import PostsContainer from '../containers/PostsContainer';

class Home extends Component {
    render() {
        return (
            <>
                <h1>Home Page</h1>
                <Cities/>
                <PostsContainer />
            </>
        );
    }
};

export default Home;