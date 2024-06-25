import axiosClient from "./axiosClient";

const restaurantApi = {
    getNameRestaurant: (params) => {
        const url = `/restaurant/get-name-restaurant?idRestaurant=${params.restaurant_id}`;
        return axiosClient.get(url);
    }
};

export default restaurantApi;