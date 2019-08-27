import React, {Component} from 'react';
import {API_URL} from '../../constants';
import axios from 'axios';
import './Post.css';

class Post extends Component {
    state = {
        title: '',
        content: '',
    }


    clearModal = () => {
        const modal = document.getElementById('registerModal');
        const body = document.querySelector('.modal-open');
        const modalBackdrop = document.querySelector('.modal-backdrop');
        modal.classList.remove('show');
        modal.style.display = 'none';
        modal.removeAttribute('aria-modal');
        modal.setAttribute('aria-hidden', true);
        body.classList.remove('modal-open');
        modalBackdrop.parentNode.removeChild(modalBackdrop);
    }

    

    updatePost = (event) => {
        const postId = this.props.post
        console.log(postId._id)
            axios.put(`${API_URL}/posts/${postId._id}`, this.state).then(
                res => {
                    this.clearModal();
                    this.props.fetchPosts();
                }
            )
        }

    deletePost = (event) => {
        const postId = this.props.post
        axios.delete(`${API_URL}/posts/${postId._id}`).then(res => {
            this.props.fetchPosts();
        })
    }
        
            
            onChangePost = (event) => {
                this.setState({
                    [event.target.name]: event.target.value,
                });
            };
            
            render() {
                const { post } = this.props
                
                console.log(post)
    
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
                    <div className="modal fade" id="registerModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                        <input type="text" id="tite" name="title" value={this.state.title} onChange={this.onChangePost} className="form-control form-control-lg" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Content">Content</label>
                                        <input type="text" id="edit" name="content" value={this.state.content} onChange={this.onChangePost} className="form-control form-control-lg" />
                                    </div>
                                </form>
                            </div>
                            <button onClick={this.updatePost} className="btn btn-primary"><i className="far fa-edit"></i></button>
                        </div>
                    </div>
                </div> 
                <button className="btn btn-primary btn-lg active" aria-pressed="true" data-toggle="modal" data-target="#registerModal"><i className="far fa-edit"></i></button>
                <button className="edit-post-btn" onClick={this.deletePost}><i className="far fa-trash-alt"></i></button>
                    </>
                : null }
        </div>
    
    )};
};

export default Post;