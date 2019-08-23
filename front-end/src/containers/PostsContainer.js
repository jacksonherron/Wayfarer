import React, {Component} from 'react';
import PostsModel from '../models/PostsModel';
import NewPost from '../components/NewPost/NewPost'
import Post from '../components/Post/Post'

class PostsContainer extends Component {
    state = {
        posts: []
    };

    componentDidMount() {
        this.fetchData();
    };

    fetchData = () => {
        PostsModel.index(this.props.city)
            .then(res => console.log(res))
            .catch(err => console.log(err));
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