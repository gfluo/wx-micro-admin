import axios from 'axios';

const service = axios.create({
    // process.env.NODE_ENV === 'development' 来判断是否开发环境
    // easy-mock服务挂了，暂时不使用了
    //baseURL: 'http://localhost:4000',
    //baseURL: 'https://www.szstswh.com',
    baseURL: 'http://123.60.8.4:4000',
    timeout: 5000
});

service.interceptors.request.use(
    config => {
        config.headers['Authorization'] = 'bearer ' + localStorage.getItem('token') || ''
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

service.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return response.data;
        } else {
            Promise.reject();
        }
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

export default service;
