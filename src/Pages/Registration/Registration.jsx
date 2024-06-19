import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import GoogleSignIn from "../../ShareComponent/GoogleSignIn/GoogleSignIn";
import axios from "axios";
import Swal from "sweetalert2";
import { useMutation } from "@tanstack/react-query";

const Registration = () => {
  const axiosPublic= useAxiosPublic();

   
  const { createUser,updateUserProfile } = useContext(AuthContext);
  const navigete = useNavigate();
const role = "user";
  
  const handleSubmit = async e =>{
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const phone = form.phone.value
    const image = form.image.files[0]
    const password = form.password.value
    const formData = new FormData()
    formData.append('image', image)
    try{
      const {data} = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_API_KEY}`,
     formData
      )
      //user Registration
      const result = await createUser(email, password)
      console.log(result);
      //update profile
      await updateUserProfile(name, data.data.display_url)
      console.log(data);
      const userInfo = {
        name,
        email,
        phone:phone,
        image:data.data.display_url,
        role: role,
      }
      axiosPublic.post('/users', userInfo)
      .then(res =>{
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User Save",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
      
        navigete('/login')
    }
    catch(error){
      console.log(error)
    }
  }
  return (
    <div>
      <div className="flex justify-center items-center mt-10 mb-20">
        <div className="card shrink-0 w-[50%] shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
            
                name="name"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"

                name="email"
                className="input input-bordered"
                required
              />
             
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="number"name="phone"
                placeholder="Phone Number"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="file"
                accept="image/*"
                placeholder="PhotoURL"
                name="image"
                className=" input-bordered"
                required
              />
         </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Sign Up"
                className="btn  btn-primary"
       />
            </div>
          </form>
          <GoogleSignIn></GoogleSignIn>
          <p className=' text-center mb-8 '>Already haven account <Link to='/login' className='font-bold text-red-700'>Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
