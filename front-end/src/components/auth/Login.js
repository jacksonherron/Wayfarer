import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { API_URL } from '../../constants';

class Login extends Component {
    state = {
        email: '',
        password: '',
        errors: null,
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        const userInfo = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post(`${API_URL}/auth/login`, userInfo, { withCredentials: true })
            .then(res => {
                this.props.setCurrentUser(res.data.id, res.data.username);
                this.props.history.push('/home')
            })
            .catch(err => {
                console.log(err)
        });
    };


    render() {
        return (
            <>
                 <li className="nav-item">
                    <span className="nav-link" data-toggle="modal" data-target="#loginModal" style={{ cursor: 'pointer'}}>Login</span>
                </li>
                
                <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email-login" name="email" value={this.state.email} onChange={this.handleChange} className="form-control form-control-lg" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" id="password-login" name="password" value={this.state.password} onChange={this.handleChange} className="form-control form-control-lg" />
                                    </div>
                                </form>
                            </div>
                            <button onClick={this.handleSubmit} className="btn btn-primary" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">Login</span></button>
                        </div>
                    </div>
                </div>
            </>
        );
    };
};

export default withRouter(Login);