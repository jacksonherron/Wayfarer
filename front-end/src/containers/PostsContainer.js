import React, {Component} from 'react';
import PostModel from '../models/PostModel';
import CityModel from '../models/CityModel';
import NewPost from '../components/NewPost/NewPost';
import Post from '../components/Post/Post';

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
        CityModel.getCity(this.state.city_url)
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
        const cityFound = (
            <>
                <NewPost city={this.state.city} pushNewPost={this.pushNewPost}/>
                { this.state.posts.map(post => <Post post={post} />) }
            </>
        )

        const cityNotFound = (
            <div className="card">
                <div>You are on the home route or invalid city_url</div>
                <div>New post button should not be displayed...</div>
            </div>
        )

        return (
            <div className="split right">
                { this.state.city ? cityFound : cityNotFound }
            </div>
        );
    };
};

export default PostsContainer;