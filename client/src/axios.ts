import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5555/api/',
});

instance.interceptors.request.use((config) => {
    config.headers!.Authorization = `Bearer ${localStorage.getItem('token')}`;

    return config;
});

export default instance;
