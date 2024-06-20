import { useEffect, useState } from "react";


const AllParcel = () => {
    const [bookings, setBookings] = useState([]);
    console.log(bookings)
    const url = 'http://localhost:5000/booking';
    useEffect(() => {
        fetch(url)
          .then((res) => res.json())
          .then((data) => setBookings(data));
      }, []);
    return (
        <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Phone</th>
        <th>Booking Date</th>
        <th>Delivery Date</th>
        <th>Cost</th>
        <th>Status</th>
        <th>Manage Button</th>
      </tr>
    </thead>
    <tbody>
      {/* row  */}
      {
        bookings.map((booking,index) => <tr key={booking._id}>
            <th>{index + 1}</th>
            <td>{booking.name}</td>
            <td>{booking.phone}</td>
            <td>{booking.bookingDate}</td>
            <td>{booking.deliveryDate}</td>
            <td>{booking.Price}</td>
            <td>pending</td>
            <td><button className="btn btn-outline btn-secondary"> Manage</button></td>
          </tr>)
      }
    </tbody>
  </table>
</div>
    );
};

export default AllParcel;