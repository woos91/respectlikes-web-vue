import axios, { AxiosInstance } from 'axios';
import getLS from '../../data/getLS';

export const commonAPI:AxiosInstance =  axios.create({
    baseURL: process.env.API_URL,
    withCredentials:false,
    timeout: 5000
});

commonAPI.interceptors.request.use(
    (config)=> {
        // 호출 직전 공통 수행 할 작업 정의
        const accTK = getLS("accessToken");
        if (accTK) {
            config.headers.Authorization = `Bearer ${accTK}`
        }
        return config;
    },
    (error)=> {
        return Promise.reject(error);
    }
);

commonAPI.interceptors.response.use(
    (response)=> {
        // 응답 데이터를 로딩 직후 공통 가공할 것들 정의
        return response;
    },
    (error)=> {
        return Promise.reject(error);
    }
);
