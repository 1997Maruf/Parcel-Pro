import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosSecure from "../useAxiosSecure";
import { useQuery } from "@tanstack/react-query";



const UseRole = () => {
    const {user, loading} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const {data:role, isLoading} = useQuery({
        queryKey: ['role',user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () =>{
            const {data} = await axiosSecure(`/users/${user.email}`)
            console.log(data.role)
            return data.role;
        }
    })
    return [role,isLoading];
};

export default UseRole;