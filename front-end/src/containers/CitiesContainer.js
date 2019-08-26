import React, { Component } from 'react';
import CityModel from '../models/CityModel';
import Cities from '../components/Cities/Cities';
class CitiesContainer extends Component {
    state = {
        cities: []
    };
    componentDidMount = () => {
        this.fetchCities();
        
    };
    fetchCities = () => {
        CityModel.getAll()
            .then((res) => {
                const cities = res.data.data;
                if (cities) {
                    CityModel.getAll()
                        .then(res => {
                            this.setState({
                                cities,
                            });
                        });
                };
            });
    };
    render() {
        return (
            this.state.cities.length && <Cities cities={this.state.cities} />
        );
    };
};
export default CitiesContainer;