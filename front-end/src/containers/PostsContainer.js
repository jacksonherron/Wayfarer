import React, {Component} from 'react';
import PostModel from '../models/PostModel';
import CityModel from '../models/CityModel';
import NewPost from '../components/NewPost/NewPost';
import Post from '../components/Post/Post';
import axios from 'axios';
import {API_URL} from '../constants';


class PostsContainer extends Component {
    state = {
        city_url: this.props.match.params.name,
        city: null,
        posts: [],
    };

    componentDidMount = () => {
        this.fetchPosts();
    };
    


    pushNewPost = (post) => {
        const posts = this.state.posts;
        posts.push(post);
        this.setState({ posts })
    }

    fetchPosts = () => {
        let city_url = '';
        if (this.props.match.params.name) {
            city_url = this.props.match.params.name;
        } else {
            city_url = "sanfrancisco"
        };
        CityModel.getCity(city_url)
            .then((res) => {
                const city = res.data.data[0];
                if (city) {
                    PostModel.index(city)
                    .then(res => {
                        const posts = res.data.data;
                        this.setState({
                            city,
                            posts,
                        });
                    });
                };
            });
    };

    render() {
        const id = this.state.posts[0]

        if (this.state.posts.length) {
            console.log(id._id)
        }
        const cityFound = (
            <>
            <div className="card" id="city-detail">
                <h1>{this.state.city ? this.state.city.name : null}</h1>
                <div>{this.state.city ? `${this.state.city.location[0]} N,  ${this.state.city.location[0]} E` : null}</div>
                <img src={this.state.city ? this.state.city.image : null} alt="city"/>
                <NewPost city={this.state.city} pushNewPost={this.pushNewPost}/>
            </div>
                { this.state.posts.map(post => <Post onChangePost={this.onChangePost} updatePost={this.updatePost} post={post} currentPost={this.currentPost} fetchPosts={this.fetchPosts}/>) }
            </>
        )

        const cityNotFound = (
            <div id="default-city-detail">

            </div>
        )

        return (
            <div id="posts-container">
                { this.state.city ? cityFound : cityNotFound }
            </div>
        );
    };
};

export default PostsContainer;