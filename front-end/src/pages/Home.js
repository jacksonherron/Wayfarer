import React, { Component } from 'react';
import PostsContainer from '../containers/PostsContainer';

class Home extends Component {
    render() {
        return (
            <>
                <h1>Home Page</h1>
                <PostsContainer />
            </>
        );
    }
};

export default Home;