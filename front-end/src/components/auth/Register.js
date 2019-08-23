import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { API_URL } from '../../constants';

class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        password2: '',
        errors: null,
    };


    clearModal = () => {
        const modal = document.getElementById('registerModal');
        const modalBackdrop = document.querySelector('.modal-backdrop');
        modal.classList.remove('show');
        modal.style.display = 'none';
        modal.removeAttribute('aria-modal');
        modal.setAttribute('aria-hidden', true);
        modalBackdrop.parentNode.removeChild(modalBackdrop);
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        });
      };

    handleSubmit = (event) => {
        const newUser = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
        }
        axios.post(`${API_URL}/auth/register`, newUser)
            .then(res => {
                console.log('posted user', res)
                this.clearModal();
                this.props.history.push('/');
            })     
            .catch(err => {
                this.setState({ errors: err.response.data.errors });
            });
      };

    render() {
        return (
            <>
                <li className="nav-item">
                    <span className="nav-link" data-toggle="modal" data-target="#registerModal" style={{ cursor: 'pointer'}}>Register</span>
                </li>
                <div className="modal fade" id="registerModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                            <h5 className="modal-title" id="exampleModalLabel">Register</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="Username">Username</label>
                                        <input type="text" id="username" name="username" value={this.state.userrname} onChange={this.handleChange} className="form-control form-control-lg" />
                                    </div>
                                    <div>
                                        <label htmlFor="email-register">Email</label>
                                        <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} className="form-control form-control-lg"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" id="password-register" name="password" value={this.state.password} onChange={this.handleChange} className="form-control form-control-lg" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password2">Confirm Password</label>
                                        <input type="password" id="password2" name="password2" value={this.state.password2} onChange={this.handleChange} className="form-control form-control-lg" />
                                    </div>
                                </form>
                            </div>
                            <button onClick={this.handleSubmit} className="btn btn-primary">Register</button>
                        </div>
                    </div>
                </div>              
            </>
        )
    }
}
export default withRouter(Register);