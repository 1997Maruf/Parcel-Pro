import {useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";


const MyDeliveryList = () => {
  const {user} = useContext(AuthContext);
    const [usern, setUsern] = useState([]);
  console.log(usern);
  const url = `https://parcel-pro-server-livid.vercel.app/users?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsern(data));
  }, []);
//     
  
    return (
        <div className="overflow-x-auto">
            <h2>delivery list</h2>
  {/* <table className="table">
    {/* head */}
    {/* <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {/* <tr className="bg-base-200">
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
    </tbody> */} 
  {/* </table>  */}
</div>
    );
};

export default MyDeliveryList;