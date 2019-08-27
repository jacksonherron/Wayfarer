import React, { Component } from 'react';
import CityModel from '../models/CityModel';
import Cities from '../components/Cities/Cities';

class CitiesContainer extends Component {
    state = {
        cities: []
    };

    render() {
        return (
            <div id="cities-container">
                { this.props.cities ? <Cities cities={this.props.cities} /> : null }
            </div>
        );
    };
};
export default CitiesContainer;