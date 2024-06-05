import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import ParcelCard from "./ParcelCard";
const MyParcels = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  console.log(bookings);
  const url = `http://localhost:5000/booking?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [user?.email, url]);
  return (
    <>
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      
      
    </tbody>
  </table>
</div>
        {
            bookings.map(booking => <ParcelCard key={booking._id} booking={booking}></ParcelCard>)
        }
      </>
  );
};

export default MyParcels;
