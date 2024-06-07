import { useContext } from "react";
import { IoLogoGoogleplus } from "react-icons/io";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";



const GoogleSignIn = () => {
    const {googleSignIn} = useContext(AuthContext);
    const axiosPublic= useAxiosPublic();
    const navigate = useNavigate();
    const from = location.state?.form?.pathname || "/";
    //google Sign In 
const handleGoogleSignIn = () =>{
    googleSignIn()
    .then(result =>{
      console.log(result);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName
      }
      axiosPublic.post('users', userInfo)
      .then(res =>{
        console.log(res.data);
      })
      navigate(from);
    })
  }
    return (
        <button onClick={handleGoogleSignIn} className="btn lg:mx-72 sm:mx-32 text-white bg-red-700 my-7">
            <IoLogoGoogleplus  />
          </button>
    );
};

export default GoogleSignIn;