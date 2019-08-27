import React, {Component} from 'react';
import PostModel from '../models/PostModel';
import CityModel from '../models/CityModel';
import NewPost from '../components/NewPost/NewPost';
import Post from '../components/Post/Post';

const links = {
    "": "San Francisco",
    "london": "London",
    "sydney": "Sydney",
    "gibraltar": "Gibraltar",
    "tokyo": "Tokyo",
    "sanfrancisco": "San Francisco",
    "seattle": "Seattle"
}

class PostsContainer extends Component {
    state = {
        city_url: links[this.props.match.params.name],
        city: null,
        posts: [],
    };

    componentDidMount = () => {
        console.log("Mounted");
        console.log(this.state)
    }
    
    componentDidUpdate = () => {
        console.log('Updated')
        this.fetchPosts();
    };

    shouldComponentUpdate = (nextState, nextProps) => {
        return( this.state.city != nextState.city);
    }

    pushNewPost = (post) => {
        const posts = this.state.posts;
        posts.push(post);
        this.setState({ posts })
    };

    fetchPosts = () => {
        if (this.props.cities.length) {
            let selectedCity = this.props.cities.filter(city => city.name === this.state.city_url)
            PostModel.index(selectedCity[0])
                .then(res => {
                    const posts = res.data.data;
                    this.setState({
                        city: selectedCity[0],
                        posts,
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
                { this.state.posts.map(post => <Post post={post} />) }
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