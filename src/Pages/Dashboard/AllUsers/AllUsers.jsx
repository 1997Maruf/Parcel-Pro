import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { TbTruckDelivery } from "react-icons/tb";
import { RiAdminFill } from "react-icons/ri";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  const handleMkeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user?.name} is an admin Now`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  const handleMakeDelivery = (user) => {
    axiosSecure.patch(`/users/delivery/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is Delivery Man Naw`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div className="mx-56">
      <div className="flex justify-between mb-10 mt-7 bg-green-500 py-4 px-4 rounded-t-2xl">
        <p>Name</p>
        <p>Phone</p>
        <p>Delivery</p>
        <p>Admin</p>
      </div>
      <div className="">
        {users.map((user) => (
          <div className="mt-10" key={user._id}>
            <div className="flex justify-between ">
              <div className="w-[35%]">
                <h3 className="border-2 border-slate-950 p-2">{user?.name}</h3>
              </div>
              <div className="w-[25%] ml-16">
                <p className="border-2 border-slate-950 p-2">{user?.phone}</p>
              </div>
              <div className="w-[35%] ml-32 ">
                {user.role === "delivery" ? (
                  "Delivery Man"
                ) : (
                  <button
                    onClick={() => handleMakeDelivery(user)}
                    className=" btn text-[10px] flex"
                  >
                    <TbTruckDelivery />
                   Make Delivery Men
                  </button>
                )}
              </div>
              <div className="w-[25%] ml-32">
                {user.role === "admin" ? (
                  "admin"
                ) : (
                  <button
                    onClick={() => handleMkeAdmin(user)}
                    className=" btn p-2 text-[10px]"
                  >
                    {" "}
                    <RiAdminFill />
                   Make Admin
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllUsers;
