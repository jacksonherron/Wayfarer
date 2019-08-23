import React, { Component } from 'react';
import CityModel from '../models/CityModel'
import Cities from '../components/Cities/Cities';
import PostsContainer from '../containers/PostsContainer';
import './home.css'

class Home extends Component {
    state = {
        city: ''
    }
    
    fetchCity = (name) => {
        CityModel.getCity(name)
            .then(res => console.log(res.data.data[0]))
            .catch(err => console.log(err));
    }

    selectCity = (event) => {
        console.log(event)
    }

    componentDidMount() {
        this.fetchCity(this.state.city)
    }

    render() {
        return (
            <>
                <div className="split left">
                    <Cities selectCity={this.selectCity} />
                </div>
                <div className="split right">
                    <PostsContainer />
                </div>
            </>
        );
    }
};

export default Home;