import React, { Component } from 'react';
import axios from 'axios';
import ProfileContainer from '../containers/ProfileContainer';
import { API_URL } from '../constants';
import ProfileModel from '../models/ProfileModel';


class Profile extends Component {
    state = {
            username: '',
            email: '',
            profile_photo: '',
            join_date: '',
            location: '',
    };
    

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

    updateProfile = () => {
        const userId = localStorage.getItem('uid');
        axios.put(`${API_URL}/users/${userId}`,this.state).then(
            res => {
            this.clearModal();
            }
        )
    };


    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    componentDidMount() {
        const userId = localStorage.getItem('uid');
        console.log(userId)
        axios.get(`${API_URL}/users/${userId}`, { withCredentials: true })
            .then(res => this.setState(res.data.data ))
            .catch(err => console.log(err));
    };


    render() {
        console.log(this.state)
        return (
            
            <ProfileContainer user={this.state} onSubmit={this.updateProfile} onChange={this.onChange}  />
            
            
            
        )
    }

}


export default Profile;