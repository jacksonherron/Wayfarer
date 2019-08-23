import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import CityModel from '../models/CityModel'
import Cities from '../components/Cities/Cities';
import PostsContainer from '../containers/PostsContainer';
import './home.css'

class Home extends Component {
    state = {
        cities: []
    }
    
    fetchCities = () => {
        CityModel.getAll()
            .then(res => this.setState({
                cities: res.data.data
            }))
            .catch(err => console.log(err));
    };

    componentDidMount() {
        this.fetchCities(this.state.city);
    };

    render() {
        return (
            <>
                <div className="split left">
                    <Cities selectCity={this.selectCity} cities={this.state.cities} />
                </div>
                <Switch>
                    <Route exact path='/home' component={ PostsContainer } className="split right"></Route>
                    <Route path='/home/:name' component={ PostsContainer } className="split right"></Route>
                </Switch>
            </>
        );
    };
};

export default Home;