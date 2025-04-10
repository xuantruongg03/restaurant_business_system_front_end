import authApi from "@/services/auth";
import ordersApi from "@/services/orders";
    import { useMutation } from "@tanstack/react-query";

const paymentReq = async (params: {idTable: string}) => {
    const res = await ordersApi.paymentAllBill(params);
    return res;
}


function usePayment() {
    const { mutateAsync: payment, isPending, error } = useMutation({
        mutationFn: (params: {idTable: string}) => paymentReq(params)
    })
    return { payment, isPending, error };
}

export default usePayment;
