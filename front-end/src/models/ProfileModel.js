import axios from 'axios';
import { API_URL } from '../constants';

const endPoint = `${API_URL}/users`;

class ProfileModel {

    static show = (user) => {
        const response = axios.get(`${endPoint}/${user._id}`, { withCredentials: true });
        return response;
    };
};

export default ProfileModel;