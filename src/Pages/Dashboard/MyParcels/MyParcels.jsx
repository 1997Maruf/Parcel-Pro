import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

import MyparcelRow from "./MyparcelRow";



 
const MyParcels = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [bookings, setBookings] = useState([]);
  // console.log(bookings);
  const url = `http://localhost:5000/booking?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [user?.email, url]);
  
  
  return (
<div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
      <th>#</th>
        <th>Parcel Type</th>
        <th>Requested Delivery Date</th>
        <th>Approximate Delivery Date</th>
        <th>Booking Date</th>
        <th>Delivery Men ID</th>
        <th>Booking Status</th>
        <th>Update</th>
        <th>Cancel</th>
        <th>Review</th>
        <th>Pay</th>
      </tr>
    </thead>
    {
      bookings.map((booking, index) => <MyparcelRow key={booking._id} index={index} booking={booking}></MyparcelRow>)
    }
  </table>
 
</div>
    
  );
};

export default MyParcels;


