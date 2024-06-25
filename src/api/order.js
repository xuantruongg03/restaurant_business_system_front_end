import axiosClient from "./axiosClient";

const ordersApi = {
    getFoodByMenu: (params) => {
        const url = '/food/get?idMenu=' + params.idMenu;
        return axiosClient.get(url);
    },
    getAllOrderClient: (params) => {
        const url = '/bills/get-all-order-client?idTable=' + params.idTable;
        return axiosClient.get(url);
    },
    getAllOrderClientPaymentAfter: (params) => {
        const url = '/bills/get-all-order-client-payment-after?idTable=' + params.idTable;
        return axiosClient.get(url);
    },
    order: (data) => {
        const url = '/bills/order';
        return axiosClient.post(url, data);
    },
    orderPaymentBefore: (data) => {
        const url = '/bills/order-payment-before';
        return axiosClient.post(url, data);
    },
    payment: (params) => {
        const url = '/bills/payment-one-food';
        return axiosClient.post(url, params);
    },
    checkBill: (params) => {
        const url = '/bills/check-bill'
        return axiosClient.post(url, params)
    },
    paymentAllBill: (params) => {
        const url = '/bills/payment-all-bill?idTable=' + params.idTable  + '&idRestaurant=' + params.idRes;
        // Get status if status = 400 
        return axiosClient.get(url);
    }
};

export default ordersApi;