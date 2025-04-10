import ordersApi from "@/services/orders";
import { useMutation } from "@tanstack/react-query";

function useUserOrder() {
    const {mutateAsync: order, isPending: isPendingOrder} = useMutation({
        mutationFn: (data: { idTable: string, idFood: string, quantity: number }) => ordersApi.order(data),
    })
    
    return {
        order,
        isPendingOrder,
    }
}

export default useUserOrder;
