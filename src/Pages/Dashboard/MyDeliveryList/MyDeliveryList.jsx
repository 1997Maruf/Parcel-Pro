import {useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";


const MyDeliveryList = () => {
  const {user} = useContext(AuthContext);
  const {email} = user;
    const [deliveryMan, setDeliveryMan] = useState({});
    const {_id} = deliveryMan || {};
  console.log("mydeliverymanID",deliveryMan?._id)
  const url = `http://localhost:5000/users/${email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDeliveryMan(data));
  }, [url,user?.email]);


    const [parcels, setParcels] = useState([]);
    console.log("parcel", parcels)
  
  useEffect(() => {
    if(_id){
      fetch(`http://localhost:5000/bookingById/${_id}`)
      .then((res) => res.json())
      .then((data) =>setParcels(data));
    }
  }, [_id]);

  // Cancel
 const status = 'Cancelled';
  const handleSubmit= (_id)  => {

    console.log("Hello")
    const updateStatus = {status}
    fetch(`http://localhost:5000/booking/${_id}`, {
    method: 'PUT',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(updateStatus)
})
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.modifiedCount > 0){
            Swal.fire({
                title: 'Success!',
                text: 'Craft Update Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
    })
  }
  
    return (
        <div className="overflow-x-auto">
            <h2>delivery list</h2>
  <table className="table">
     
     {/* <thead>
      <tr>
        <th></th>
        <th>User’s Name</th>
        <th>Receivers Name</th>
        <th>User’s Phone</th>
        <th>Delivery Date</th>
        <th>Delivery Date</th>
        <th>Approximate Date</th>
        <th>Recievers phone</th>
        <th>Receivers Address </th>
        <th>View Location</th>
      </tr>
    </thead> */}
    <tbody>
       
       {
        parcels?.map((parcel, index) =><tr key={parcel._id} className="bg-base-200">
          <th>{index +1}</th>
          <td>{parcel?.name}</td>
          <td>{parcel?.receiver}</td>
          <td>{parcel?.deliveryDate}</td>
          <td>{parcel?.approximateDate}</td>
          <td>{parcel?.phoneNumber}</td>
          <td>{parcel?.deliveryAddress}</td>
          <td><button>View Location</button></td>
          <td><button onClick={(e)=>handleSubmit(parcel._id)}>Cancel</button></td>
          <td><button>Deliver</button></td>
        </tr>)
       }
    </tbody>  
   </table> 
</div>
    );
};

export default MyDeliveryList;