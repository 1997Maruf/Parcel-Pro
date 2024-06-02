

const Login = () => {
    return (
      <div className="flex justify-center items-center mt-20">

         <div className="card shrink-0 w-[50%]  shadow-2xl bg-base-100">
          <h2 className="text-4xl font-bold text-center">Login Naw</h2>
      <form onSubmit={handelLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <input type="submit" value="Login" className="btn btn-primary">Login</input>
        </div>
      </form>
    </div>
      </div>
    
  
    );
};

export default Login;