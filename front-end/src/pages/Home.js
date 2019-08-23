import React from 'react';
import PostsContainer from '../containers/PostsContainer';

class Home {

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