import axiosClient from "../apis/axiosClient";

const ordersApi = {
    getFoodByMenu: async (params: { idMenu: string }) => {
        const url = '/food/get/' + params.idMenu;
        const response = await axiosClient.get(url);
        return response;
    },
    getAllOrderClient: async (params: { idTable: string }) => {
        const url = '/bills/get-all-order-client/' + params.idTable;
        const response = await axiosClient.get(url);
        return response;
    },
    getAllOrderClientPaymentAfter: async (params: { idTable: string }) => {
        const url = '/bills/get-all-order-client-payment-after?idTable=' + params.idTable;
        const response = await axiosClient.get(url);
        return response;
    },
    order: async (data: { idTable: string, idFood: string, quantity: number }) => {
        const url = '/bills/order';
        const response = await axiosClient.post(url, data);
        return response;
    },
    orderPaymentBefore: async (data: { idTable: string, idRestaurant: string }) => {
        const url = '/bills/order-payment-before';
        const response = await axiosClient.post(url, data);
        return response;
    },
    payment: async (data: { idTable: string, idRestaurant: string, idFood: string }) => {
        const url = '/bills/payment-one-food';
        const response = await axiosClient.post(url, data);
        return response;
    },
    checkBill: async (data: { idTable: string }) => {
        const url = '/bills/check-bill/' + data.idTable;
        const response = await axiosClient.get(url)
        return response;
    },
    paymentAllBill: async (params: { idTable: string }) => {
        const url = '/bills/payment-all-bill/'+ params.idTable;
        const response = await axiosClient.get(url);
        return response;
    }
};

export default ordersApi;