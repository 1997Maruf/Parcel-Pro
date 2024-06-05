import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Registration = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    console.log(data.email);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User Save",
        showConfirmButton: false,
        timer: 1500
      });
      navigate('/');
    });
  };
  return (
    <div>
      <div className="flex justify-center items-center mt-10 mb-20">
        <div className="card shrink-0 w-[50%] shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                {...register("name", { required: true })}
                name="name"
                className="input input-bordered"
                required
              />
              {errors.name && (
                <span className="text-red-800 mt-2">
                  This field is required
                </span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                {...register("email", { required: true })}
                name="email"
                className="input input-bordered"
                required
              />
              {errors.email && (
                <span className="text-red-800 mt-2">
                  This field is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="PhotoURL"
                {...register("photo", { required: true })}
                name="photo"
                className="input input-bordered"
                required
              />
              {errors.photo && (
                <span className="text-red-800 mt-2">
                  This field is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                {...register("password", {
                  required: true,
                  maxLength: 6,
                  minLength: 4,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                name="password"
                className="input input-bordered"
                required
              />
              {errors.password?.type == "required" && (
                <span className="text-red-800 mt-2">
                  This field is required
                </span>
              )}
              {errors.password?.type == "maxLength" && (
                <span className="text-red-800 mt-2">
                  Password must be lassthen 6 characters
                </span>
              )}
              {errors.password?.type == "minLength" && (
                <span className="text-red-800  mt-2">
                  Password must be 4 characters
                </span>
              )}
              {errors.password?.type == "pattern" && (
                <span className="text-red-800   mt-2">
                  Password must be one uppercase one lowercase one number one
                  special characters
                </span>
              )}
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Sign Up"
                className="btn  btn-primary"
              />
            </div>
          </form>
          <p className=' text-center mb-8 '>Already haven account <Link to='/login' className='font-bold text-red-700'>Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
