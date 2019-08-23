import axios from 'axios';
import { API_URL } from '../constants';

const endPoint = `${API_URL}/cities`;

class CityModel {
    static getCity = (name) => {
        const response = axios.get(`${endPoint}/${name}`);
        return response;
    };
};

export default CityModel;