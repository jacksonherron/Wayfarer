import React, { Component } from 'react';
import axios from 'axios';
class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        password2: '',
        city: '',
        errors: null,
    };

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
            city: this.state.city
        }
        console.log(newUser)
        // axios.post(`${API_URL}/auth/register`, newUser)
        //   .then(res => this.props.history.push('/login'))     
        //   .catch(err => {
        //     this.setState({ errors: err.response.data.errors });
        //   });
      };

    render() {
        return (
            <>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#registerModal">
                Register
                </button>
                <div className="modal fade" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Register</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            </div>
                            <div className="modal-body">
                                {this.state.errors && this.state.errors.map((e, i) => (
                                    <div className="alert alert-danger alert-dismissible fade show" style={{width: '100%'}} role="alert" key={i}>
                                    {e.message}
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    </div>
                                ))}
                                <form>
                                    <div className="form-group">
                                            <label htmlFor="city">City</label>
                                            <input type="text" id="city" name="city" value={this.state.city} onChange={this.handleChange} className="form-control form-control-lg" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Username">Username</label>
                                        <input type="text" id="username" name="username" value={this.state.userrname} onChange={this.handleChange} className="form-control form-control-lg" />
                                    </div>
                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} className="form-control form-control-lg"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control form-control-lg" />
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
export default Register;