import axiosClient from "../apis/axiosClient";

const authApi = {
    register: async (params: { username: string, password: string, phone: string, name: string }) => {
        const url = `/account/register`;
        const res = await axiosClient.post(url, params);
        return res;
    },

    login: async (params: { username: string, password: string }) => {
        const url = `/account/login`;
        const res = await axiosClient.post(url, params);
        return res;
    }
};

export default authApi;