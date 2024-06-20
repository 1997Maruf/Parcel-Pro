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
      console.log(res.data);
      return res.data;
    },
   
  });

  const handleMkeAdmin = (user) => {
    console.log(users);
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
    
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Delivery</th>
              <th>Admin</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users?.map((user,index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.phone}</td>

                <th className="w-[35%] ml-32 ">
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
                </th>

                <th className="w-[25%] ml-32">
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
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
   
  );
};

export default AllUsers;


