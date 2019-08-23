import React, { Component } from 'react';

class ProfileForm extends Component {
    constructor() {
        super();
        this.state = {
            location: '',
        };
    };


    onChange = (event) => {
        this.setState({
            location: event.target.value,
        });
    };
    
    onSubmit = (event) => {
        event.preventDefault();
        const location = this.props.location;
        location.body = this.state.location;
        this.props.updateLocation(location);
        this.setState({ location: '' });
        this.props.toggleBodyForm();
    };

    render() {
        return (
            <div style={this.props.style} className ='profileForm'>
            <form onSubmit={ this.onSubmit }>
            <input
                autoFocus={this.props.autoFocus}
                onChange={this.onChange}
                placeholder='Write your location here..'
                type='text'
                value={this.state.location} />
                <button type='submit'>Save</button>
             </form>
            </div>
        );
    };
};

export default ProfileForm;







