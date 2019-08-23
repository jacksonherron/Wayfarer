import React, { Component } from 'react';

class ProfileContainer extends Component {
    state = {
        currentUser: this.props.currentUser
    };

    render() {
        return(
            <>
                <h1>Profile Container</h1>
            </>
        );
    };
};

export default ProfileContainer;