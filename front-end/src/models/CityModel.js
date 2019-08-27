import axios from 'axios';
import { API_URL } from '../constants';

const endPoint = `${API_URL}/cities`;

class CityModel {
    static getAll = () => {
        const response = axios.get(`${endPoint}`, { withCredentials: true });
        return response;
    };

    static getCity = (name) => {
        const response = axios.get(`${endPoint}/${name}`, { withCredentials: true });
        return response;
    };
};

export default CityModel;