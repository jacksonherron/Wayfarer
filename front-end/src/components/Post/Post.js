import React from 'react';

const Post = ({post}) => {
    return(
        <div className="card">
            <div><strong>Title:</strong> {post.title}</div>
            <div><strong>Content:</strong> {post.content}</div>
            <div><strong>Username:</strong> {post.user.username}</div>
            <div><strong>Date Posted:</strong> { new Date(post.date_posted).toLocaleString() }</div>
            <div><strong>City:</strong> {post.city.name}</div>
            <br/>
            <button>Delete</button>
        </div>
    );
};

export default Post;