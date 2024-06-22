import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";



const MyProfile = () => {
    const { user} = useContext(AuthContext);
    const {displayName,email,photoURL} = user;
    console.log(user)
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
  // const url = `http://localhost:5000/users?email=${user?.email}`;
  useEffect(() => {
    fetch(`http://localhost:5000/users?email=${email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [user]);
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl m-auto mt-16">
    <figure><img className="rounded-full w-48 h-48 border-4 border-slate-700 p-5" src={ photoURL} alt="Shoes" /></figure>
    <div className="card-body text-center">
     
      <h2 className=" text-3xl font-bold text-center">{displayName}</h2>
      <p>{ email}</p>
      
      <div className="">
        <button className="btn btn-primary">Update profile</button>
      </div>
    </div>
  </div>
  );
};

export default MyProfile;
