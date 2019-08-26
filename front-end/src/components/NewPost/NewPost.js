import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants';
import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        errors: [],
    };

    clearModal = () => {
        const modal = document.getElementById('newPostModal');
        const body = document.querySelector('.modal-open');
        const modalBackdrop = document.querySelector('.modal-backdrop');
        modal.classList.remove('show');
        modal.style.display = 'none';
        modal.removeAttribute('aria-modal');
        modal.removeAttribute('aria-modal');
        modal.setAttribute('aria-hidden', true);
        body.classList.remove('modal-open');
        modalBackdrop.parentNode.removeChild(modalBackdrop);
        this.setState({
            title: '',
            content: ''
        })
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        const newPost = {
            user: localStorage.getItem('uid'),
            city: this.props.city,
            title: this.state.title,
            content: this.state.content
        }

        axios.post(`${API_URL}/posts`, newPost, { withCredentials: true })
            .then(res => {
                this.clearModal();
                this.props.pushNewPost(res.data.data);
            })
            .catch(err => console.log(err));
    };


    render() {
        return (
            <>
                <button className="btn btn-primary new-post-btn" data-toggle="modal" data-target="#newPostModal">+</button>
                <div className="modal fade" id="newPostModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">New Post</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div>
                                        <label htmlFor="title">Title</label>
                                        <input type="test" id="title" name="title" value={this.state.title} onChange={this.handleChange} className="form-control form-control-lg" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="content">Content</label>
                                        <textarea id="content" name="content" value={this.state.content} onChange={this.handleChange} className="form-control" rows="3"></textarea>
                                    </div>
                                </form>
                            </div>
                            <button onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </>
        );
    };
};

export default NewPost;