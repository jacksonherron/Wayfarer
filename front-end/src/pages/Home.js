import React, { Component } from 'react';
import Cities from '../components/Cities/Cities';
import PostsContainer from '../containers/PostsContainer';
import './home.css'

class Home extends Component {
    render() {
        return (
            <>
                <div className="split left">
                    <Cities />
                </div>
                <div className="split right">
                    <PostsContainer />
                </div>
            </>
        );
    }
};

export default Home;