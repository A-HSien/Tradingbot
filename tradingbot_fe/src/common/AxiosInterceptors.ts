import axios from 'axios';
import Cookies from "js-cookie";


axios.interceptors.request.use(config => {
    const token = Cookies.get('auth-token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
}, error => {
    return Promise.reject(error)
})


axios.interceptors.response.use(response => {
    return response
}, error => {
    if (error.response) {

        switch (error.response.status) {
            case 401:
                window.location.href = '/';
                break
        }
        return Promise.reject(error.response);
    }

    return Promise.reject(error);
})