import React, {Component} from 'react';
import PostModel from '../models/PostModel';
import NewPost from '../components/NewPost/NewPost';
import Post from '../components/Post/Post';


const links = {
    "london": "London",
    "sydney": "Sydney",
    "gibraltar": "Gibraltar",
    "tokyo": "Tokyo",
    "sanfrancisco": "San Francisco",
    "seattle": "Seattle"
}

class PostsContainer extends Component {
    state = {
        city_name: links[this.props.match.params.name] || "San Francisco",
        city: null,
        posts: [],
        postsRetrieved: false,
    };
    
    componentDidUpdate = () => {
        if (!this.state.postsRetrieved) {
            this.fetchPosts();
        }
    };
    


    pushNewPost = (post) => {
        const posts = this.state.posts;
        posts.push(post);
        this.setState(prevState => {return { posts: [...prevState.posts, post] }})
    };

    fetchPosts = () => {
        if (this.props.cities.length) {
            let selectedCity = this.props.cities.filter(city => city.name === this.state.city_name)
            PostModel.index(selectedCity[0])
                .then(res => {
                    const posts = res.data.data;
                    this.setState({
                        city: selectedCity[0],
                        posts,
                        postsRetrieved: true
                    });
            });
        };
    };

    render() {
        const cityFound = (
            <>
            <div className="card" id="city-detail">
                <h1>{this.state.city ? this.state.city.name : null}</h1>
                <div>{this.state.city ? `${this.state.city.location[0]} N,  ${this.state.city.location[0]} E` : null}</div>
                <img src={this.state.city ? this.state.city.image : null} alt="city"/>
                <NewPost city={this.state.city} pushNewPost={this.pushNewPost}/>
            </div>
                { this.state.posts.map((post,i) => <Post fetchPosts={this.fetchPosts} post={post} key={i} />) }
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