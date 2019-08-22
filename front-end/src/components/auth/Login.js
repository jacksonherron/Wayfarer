import React, { Component } from 'react';
import axios from 'axios';
import API_URL from '../../constants';

class Login extends Component {
    state = {
        email: '',
        password: '',
        error: null,
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        const userInfo = this.state;
        console.log(userInfo)
        // axios.post(`${API_URL}/auth/login`, userInfo, { withCredentials: true })
        //     .then(res => {
        //         this.props.setCurrentUser(res.data.id);
        //         this.props.history.push('/profile')
        //     })
        //     .catch(err => {
        //         this.setState({ errors: err.response.data.errors });
        // });
    };


    render() {
        return (
            <>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#loginModal">
                Login
                </button>
                
                <div className="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
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
                                        <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} className="form-control form-control-lg" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control form-control-lg" />
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

export default Login;