import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";



const MyProfile = () => {
    const { user} = useContext(AuthContext);
    
    
    // const axiosSecure = useAxiosSecure();
    // const { data: users = []} = useQuery({
    //   queryKey: ["users", user?.email],
    //   queryFn: async () => {
    //     const {data} = await axiosSecure.get(`/users${user?.email}`);
    //     console.log(data);
    //     return data;
    //   },
     
    // });
  const [userInfo, setUserInfo] = useState([]);
  console.log(userInfo);
  const url = `http://localhost:5000/users/${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [url]);
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl m-auto mt-16">
    <figure><img className="rounded-full w-48 h-48 border-4 border-slate-700 p-5" src={ userInfo?.image} alt="Shoes" /></figure>
    <div className="card-body text-center">
     
      <h2 className=" text-3xl font-bold text-center">{userInfo?.name}</h2>
      <p>{userInfo?.email}</p>
      
      <div className="">
        <button className="btn btn-primary">Update profile</button>
      </div>
    </div>
  </div>
  );
};

export default MyProfile;
