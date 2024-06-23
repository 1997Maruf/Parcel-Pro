import { useEffect, useState } from "react";

const AllDeliveryMen = () => {
    const [users, setUsers] = useState([]);
   console.log(users);
    const url = 'http://localhost:5000/users';
    useEffect(() => {
        fetch(url)
          .then((res) => res.json())
          .then(data => {
             const deliveryMan = data.filter(man => man.role === 'delivery');
             setUsers(deliveryMan)
          });
      }, []);
  
    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Delivery Man's Name</th>
        <th>Phone Number</th>
        <th>Average review</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users?.map((user,index) => <tr key={user._id} className="bg-base-200">
            <th>{index + 1}</th>
            <td>{user.name}</td>
            <td>{user.phone}</td>
            <td>Blue</td>
          </tr>)
      }
    </tbody>
  </table>
</div>
    );
};

export default AllDeliveryMen;