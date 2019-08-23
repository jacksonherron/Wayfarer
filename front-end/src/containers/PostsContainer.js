import React, {Component} from 'react';
import PostModel from '../models/PostModel';
import NewPost from '../components/NewPost/NewPost'
import Post from '../components/Post/Post'

class PostsContainer extends Component {
    state = {
        posts: []
    };

    componentDidUpdate() {
        this.fetchData();
        console.log("PostsContainer Props:", this.props);
    };

    fetchData = () => {
        PostModel.index(this.props.city_id)
            .then(res => (res))
            .catch(err => (err));
    };

    render() {
        return (
            <>
                <NewPost city={this.props.city} />
                {this.state.posts && this.state.posts.map((post, i) => (
                    <Post key={i}/>
                ))}
            </>
        );
    };
};

export default PostsContainer;