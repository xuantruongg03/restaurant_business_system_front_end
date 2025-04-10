import { useMutation } from "@tanstack/react-query";
import authApi from "@/services/auth";

const registerReq = async (data: {username: string, password: string, name: string, phone: string}) => {
    const res = await authApi.register(data);
    return res;
}

function useRegister() {
    const { mutateAsync: register, isPending, error } = useMutation({
        mutationFn: (params: {username: string, password: string, name: string, phone: string}) => registerReq(params)
    })
    return { register, isPending, error };
}

export default useRegister;
