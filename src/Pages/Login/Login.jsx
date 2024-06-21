import { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProvider";


import Swal from "sweetalert2";
import GoogleSignIn from "../../ShareComponent/GoogleSignIn/GoogleSignIn";
// import { AuthContext } from '../../FirebaseProvider/FirebaseProvider';

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisable] = useState(true);
  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.form?.pathname || "/";
  console.log(location);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handelLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your Login Success",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from);
    });
  };
  
  const handeleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisable(false);
    }
  };
  return (
    <div>
      <div className="flex justify-center items-center mt-10 mb-20">
        <div className="card shrink-0 w-[50%] shadow-2xl bg-base-100">
          <form onSubmit={handelLogin} className="card-body">
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
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control mt-6">
              <input
                disabled={disabled}
                type="submit"
                value="Login"
                className="btn btn-primary"
              />
            </div>
          </form>
          <div className="form-control mx-10">
            <label className="label">
              <LoadCanvasTemplate />
            </label>
            <input
              type="text"
              placeholder="Captcha"
              ref={captchaRef}
              name="Captcha"
              className="input input-bordered"
              required
            />
            <button
              onClick={handeleValidateCaptcha}
              className="btn btn-outline btn-xs mt-4"
            >
              Validate
            </button>
          </div>
         <GoogleSignIn></GoogleSignIn>
          <p className=" text-center mb-8 ">
            Have an account{" "}
            <Link to="/register" className="font-bold text-red-700">
              Registration
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
