import axios from "axios";

const axiosPublic = axios.create({
baseURL: 'https://parcel-pro-server-livid.vercel.app/'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;