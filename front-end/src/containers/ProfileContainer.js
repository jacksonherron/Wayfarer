import React, { Component } from 'react';

class Profile extends Component {
    state = {
        currentUser: this.props.currentUser
    };

    render() {
        return(
            <>
                <h1>Profile Container</h1>
                <h2>{this.state.currentUser}</h2>
            </>
        );
    };
};

export default Profile;