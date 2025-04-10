import axios from 'axios';
import { stringify } from 'qs';

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "content-type": "application/json",
    },
    paramsSerializer: (params) => stringify(params, { encode: false }),
});

axiosClient.interceptors.request.use(async (config) => {
    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }
        return response;
    },
    (error) => {
        // Handle errors
        throw error;
    },
);

export default axiosClient;
