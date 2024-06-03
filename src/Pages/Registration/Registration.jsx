import { useForm } from "react-hook-form";


const Registration = () => {
  const {register, handleSubmit, watch, formState: {errors}} = useForm();
 const onSubmit = data => {
  console.log(data)
}
    // const handelRegister = e =>{
    //     e.preventDefault()
    //     const form = e.target;
    //     const name = form.name.value;
    //     const email = form.email.value;
    //     const photo = form.photo.value;
    //     const password = form.password.value;
    //     console.log(name, email, photo, password)
    //   }
    return (
        <div>
        <div className='flex justify-center items-center mt-10 mb-20'>
         <div className="card shrink-0 w-[50%] shadow-2xl bg-base-100">
         <form  onSubmit={handleSubmit(onSubmit)}  className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" {...register("name", { required: true })} name="name" className="input input-bordered" required />
                {errors.name && <span className="text-red-800 mt-2">This field is required</span>}

              </div>
              
              <div className="form-control">
             <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" {...register("email",{ required: true })} name="email" className="input input-bordered" required />
                {errors.email && <span className="text-red-800 mt-2">This field is required</span>}

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" placeholder="PhotoURL" {...register("photo", { required: true })} name="photo" className="input input-bordered" required />
                {errors.photo && <span className="text-red-800 mt-2">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" {...register("password", { required: true,maxLength: 6, minLength:4, pattern: /^[A-Za-z]+$/i   })}  name="password" className="input input-bordered" required />
                {errors.password?.type == 'required' && <span className="text-red-800 mt-2">This field is required</span>}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
       </div>
       </div>
      </div>
   
    );
};

export default Registration;