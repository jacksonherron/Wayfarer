import axios from 'axios';
import { API_URL } from '../constants';

const endPoint = `${API_URL}/users`;

class ProfileModel {

    static show = (user) => {
        const response = axios.get(`${endPoint}/${user._id}`);
        return response;
    };

    static update = (user) => {
        const response = axios.put(`${endPoint}/${user._id}`, user);
        return response;
    };
};

export default ProfileModel;