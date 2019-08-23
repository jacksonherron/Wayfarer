import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { API_URL } from '../../constants';

class Login extends Component {
    state = {
        title: '',
        content: '',
        errors: []
    };

    clearModal = () => {
        const modal = document.getElementById('newPost');
        const modalBackdrop = document.querySelector('.modal-backdrop');
        modal.classList.remove('show');
        modal.style.display = 'none';
        modal.removeAttribute('aria-modal');
        modal.setAttribute('aria-hidden', true);
        modalBackdrop.parentNode.removeChild(modalBackdrop);
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
                this.props.setCurrentUser(res.data.id);
            })
            .catch(err => {
                this.setState({ errors: err.response.data.errors });
        });
    };


    render() {
        return (
            <>
                 <button className="btn btn-primary new-post-btn" data-toggle="modal" data-target="#newPostModal">+</button>
                
                <div className="modal fade" id="newPostModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            {this.state.errors && this.state.errors.map((e, i) => (
                                <div className="alert alert-danger alert-dismissible fade show" style={{width: '100%'}} role="alert" key={i}>
                                    {e.message}
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            ))}
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
                            <button onClick={this.handleSubmit} className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>
            </>
        );
    };
};

export default withRouter(Login);