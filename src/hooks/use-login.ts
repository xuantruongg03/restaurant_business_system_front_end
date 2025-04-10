import authApi from "@/services/auth";
    import { useMutation } from "@tanstack/react-query";

const loginReq = async (data: {username: string, password: string}) => {
    const res = await authApi.login(data);
    return res;
}


function useLogin() {
    const { mutateAsync: login, isPending, error } = useMutation({
        mutationFn: (params: {username: string, password: string}) => loginReq(params)
    })
    return { login, isPending, error };
}

export default useLogin;
