import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import CityModel from '../models/CityModel'
import CitiesContainer from '../containers/CitiesContainer';
import PostsContainer from '../containers/PostsContainer';
import Footer from '../components/layout/Footer';
// import NotFound from '../components/NotFound/NotFound';
import './Home.css'


class Home extends Component {
    state = {
        cities: []
    }
    
    fetchCities = () => {
        CityModel.getAll()
            .then(res => {
                this.setState({ cities: res.data.data })
            })
            .catch(err => console.log(err));
    };

    componentDidMount() {
        this.fetchCities();
    };

    render() {
        return (
            <div id="home-container">
                <>
                    <CitiesContainer cities={this.state.cities} />
                    
                </>
            
                <Switch>

                     

                    <Route exact path='/home' render={(props) => <PostsContainer {...props} cities={this.state.cities} /> } />
                    <Route path='/home/:name' render={(props) => <PostsContainer {...props} cities={this.state.cities} />} />

                </Switch>
                <Footer />
            </div>
        );
    };
};

export default Home;