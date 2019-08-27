import React, {Component} from 'react';
import {API_URL} from '../../constants';
import axios from 'axios';
import './Post.css';

class Post extends Component {
    state = {
        title: this.props.post.title,
        content:  this.props.post.content,
    }


    clearModal = () => {
        const modal = document.getElementById(`postModal-${this.props.post._id}`);
        // const body = document.querySelector(`.modal-open`);
        // const modalBackdrop = document.querySelectorAll(`.modal-backdrop`);
        // console.log(modal, body, modalBackdrop)
        // modal.classList.remove('show');
        // modal.style.display = 'none';
        // modal.removeAttribute('aria-modal');
        // modal.setAttribute('aria-hidden', true);
        // body.classList.remove('modal-open');
        // modalBackdrop.parentNode.removeChild(modalBackdrop);
    }

    

    updatePost = (event) => {
        const { title, content } = this.state;
        const date_posted = Date.now();
        const updatedPost = {
            title,
            content,
            date_posted
        };
        const postId = this.props.post
        axios.put(`${API_URL}/posts/${postId._id}`, updatedPost).then(
            res => {
                this.clearModal();
                this.props.fetchPosts();
            }
        )
    }

    deletePost = (event) => {
        axios.delete(`${API_URL}/posts/${this.props.post._id}`).then(res => {
            this.props.fetchPosts();
        })
    }
        
            
    onChangePost = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };
    
    render() {
        const { post } = this.props;
        const username = localStorage.getItem('username');
        console.log({post})
        return(
            <div className="card post-card">
                <div className="post-user">{post.user.username}</div>
                <div className="post-date">{ new Date(post.date_posted).toLocaleString() }</div>
                <h4>{post.title}</h4>
                <div className="post-content">{post.content}</div>
                { post.user.username === username 
                    ? 
                        <>
                        <div className="modal fade" id={`postModal-${post._id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Edit Post</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                </div>
                                <div className="modal-body">
                                    <form >
                                        <div className="form-group">
                                            <label htmlFor="Title">Title</label>
                                            <input type="text" id="tite" name="title" value={this.state.title} default={this.state.title} onChange={this.onChangePost} className="form-control form-control-lg" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="Content">Content</label>
                                            <input type="text" id="edit" name="content" value={this.state.content} default={this.state.content} onChange={this.onChangePost} className="form-control form-control-lg" />
                                        </div>
                                    </form>
                                </div>
                                <button onClick={this.updatePost} type="button" className="save-post-btn" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">Save</span></button>
                            </div>
                        </div>
                    </div> 
                    <button className="edit-post-btn" aria-pressed="true" data-toggle="modal" data-target={`#postModal-${post._id}`}><i className="far fa-edit"></i></button>
                    <button className="delete-post-btn" onClick={this.deletePost}><i className="far fa-trash-alt"></i></button>
                        </>
                    : null }
            </div>
    
    )};
};

export default Post;