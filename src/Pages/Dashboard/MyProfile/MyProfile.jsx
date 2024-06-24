import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import axios from "axios";
import {
  Button,
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";

const MyProfile = () => {
  const { user,  updateUserProfile } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const [userInfo, setUserInfo] = useState([]);
 
  console.log(userInfo);
  const url = `https://parcel-pro-server-livid.vercel.app//users/${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [url]);

  let [isOpen, setIsOpen] = useState(false);
  
  function open() {
    console.log();
    setIsOpen(true);
   
  }

  function close() {
    setIsOpen(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.files[0];

    const formData = new FormData();
    formData.append("image", image);
    try {
      const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_API_KEY}`,
        formData
      );

      //update profile
      await updateUserProfile( data.data.display_url);
      console.log(data);
      const userInfo = {
        image: data.data.display_url,
      };
      axiosPublic.put(`/users/?email=${user?.email}`, userInfo)
       .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Registration Success",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl m-auto mt-16">
      <figure>
        <img
          className="rounded-full w-48 h-48 border-4 border-slate-700 p-5"
          src={userInfo?.image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body text-center">
        <h2 className=" text-3xl font-bold text-center">{userInfo?.name}</h2>
        <p>{userInfo?.email}</p>
        <Button
            onClick={open}
            className="rounded-md  btn-outline btn-secondary py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
          >
         update
          </Button>
        <div className="">
          
          <Transition appear show={isOpen}>
            <Dialog
              as="div"
              className="relative  z-10 focus:outline-none"
              onClose={close}
            >
              <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black">
                <div className="flex min-h-full items-center justify-center p-4">
                  <TransitionChild
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 transform-[scale(95%)]"
                    enterTo="opacity-100 transform-[scale(100%)]"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 transform-[scale(100%)]"
                    leaveTo="opacity-0 transform-[scale(95%)]"
                  >
                    <DialogPanel className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl">
                      {/* model component */}
                      <form onSubmit={handleSubmit}>
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

                        <input
                          className="bg-orange-400 ml-7"
                          type="submit"
                          value="submit"
                        />
                      </form>
                      <div className="mt-4">
                        <Button
                          className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                          onClick={close}
                        >
                          Got it, thanks!
                        </Button>
                      </div>
                    </DialogPanel>
                  </TransitionChild>
                </div>
              </div>
            </Dialog>
          </Transition>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
