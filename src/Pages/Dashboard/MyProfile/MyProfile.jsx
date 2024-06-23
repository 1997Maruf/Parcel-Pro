import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import axios from "axios";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";



const MyProfile = () => {
    const { user} = useContext(AuthContext);
    
    
    
  const [userInfo, setUserInfo] = useState([]);
  const {image} = userInfo;
  console.log(userInfo);
  const url = `http://localhost:5000/users/${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [url]);



  // const handleSubmit = async e =>{
  //   e.preventDefault()
  //   const form = e.target
  //   const name = form.name.value
  //   const email = form.email.value
  //   const phone = form.phone.value
  //   const image = form.image.files[0]
  //   const password = form.password.value
  //   const formData = new FormData()
  //   formData.append('image', image)
  //   try{
  //     const {data} = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_API_KEY}`,
  //    formData
  //     )
  //     //user Registration
  //     const result = await createUser(email, password)
  //     console.log(result);
  //     //update profile
  //     await updateUserProfile(name, data.data.display_url)
  //     console.log(data);
  //     const userInfo = {
  //       name,
  //       email,
  //       phone:phone,
  //       image:data.data.display_url,
  //       role: role,
  //     }
  //     axiosPublic.post('/users', userInfo)
  //     .then(res =>{
  //       if(res.data.insertedId){
  //         Swal.fire({
  //           position: "top-end",
  //           icon: "success",
  //           title: "Registration Success",
  //           showConfirmButton: false,
  //           timer: 1500
  //         });
  //       }
  //     })
      
  //       navigete('/login')
  //   }
  //   catch(error){
  //     console.log(error)
  //   }
  // }
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
