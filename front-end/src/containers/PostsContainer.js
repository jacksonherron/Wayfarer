import React, {Component} from 'react';
import PostsModel from '../models/PostsModel';
import NewPost from '../components/NewPost/NewPost'

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
                <div>PostsContainer</div>
                <NewPost city={this.props.city} />
            </>
        );
    };
};

export default PostsContainer;