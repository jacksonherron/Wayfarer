import React from 'react';
import './Post.css';

const Post = ({post}) => {
    const username = localStorage.getItem('username');


    return(
        <div className="card post-card">
            <div className="post-user">{post.user.username}</div>
            <div className="post-date">{ new Date(post.date_posted).toLocaleString() }</div>
            <h4>{post.title}</h4>
            <div className="post-content">{post.content}</div>
            { post.user.username === username 
                ? 
                    <>
                        <a className="delete-post-btn"><i className="far fa-edit"></i></a>
                        <a className="edit-post-btn"><i className="far fa-trash-alt"></i></a>
                    </>
                : null }
        </div>
    );
};

export default Post;