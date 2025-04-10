import axiosClient from "../apis/axiosClient";

const restaurantApi = {
    getNameRestaurant: async (params: { table_id: string }) => {
        const url = `/restaurant/get-all-restaurant-of-table/` + params.table_id;
        const res = await axiosClient.get(url);
        return res;
    }
};

export default restaurantApi;