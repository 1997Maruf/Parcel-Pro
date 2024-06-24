// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";

// const Daly = () => {
   
//     const parcel = useLoaderData();
//     const {_id} =parcel;


//     const [deliveryMen, setDeliveryMen] = useState([]);
//   const [selectedDeliveryMan, setSelectedDeliveryMan] = useState('');
//   const [deliveryDate, setDeliveryDate] = useState('');

//   useEffect(() => {
//     // Fetch delivery men from the backend
//     axios.get('https://parcel-pro-server-livid.vercel.app//users')
//       .then(response => setDeliveryMen(response.data))
//       .catch(error => console.error('Error fetching delivery men:', error));
//   }, []);

//   const handleAssign = () => {
//     // // Update booking in the backend
//     // axios.put(`/api/bookings/${bookingId}`, {
//     //   deliveryManId: selectedDeliveryMan,
//     //   deliveryDate: deliveryDate,
//     //   status: 'On The Way'
//     // })
//     // .then(response => {
//     //   console.log('Booking updated:', response.data);
//     //   closeModal();
//     // })
//     // .catch(error => console.error('Error updating booking:', error));
//   };


// //     const [deliveryMans, setDeliveryMans] = useState([]);

// //   useEffect(() => {
// //     fetch("https://parcel-pro-server-livid.vercel.app//users")
// //       .then((res) => res.json())
// //       .then((data) => {
// //         const deliveryMan = data.filter((man) => man.role === "delivery");
// //         setDeliveryMans(deliveryMan);
// //       });
// //   }, []);

// const handleSubmit= (event)  => {
//         // event.preventDefault();
//         // const name = form.value.value;
//         //        const name = e.target.name.value
//         // const form = event.target;
//     //     
//     //     const aoximatedate = form.aoximatedate.value;
//     //     console.log(name,aoximatedate)
//     //     const updateBooking = { name, aoximatedate}
//     //     fetch(https://parcel-pro-server-livid.vercel.app/${_id}`, {
//     //     method: 'PUT',
//     //     headers: {
//     //         'content-type': 'application/json'
//     //     },
//     //     body: JSON.stringify(updateBooking)
//     // })
//     //     .then(res => res.json())
//     //     .then(data => {
//     //         console.log(data);
//     //         if(data.modifiedCount > 0){
//     //             Swal.fire({
//     //                 title: 'Success!',
//     //                 text: 'Craft Update Successfully',
//     //                 icon: 'success',
//     //                 confirmButtonText: 'Cool'
//     //               })
//     //         }
//     //     })
//       // }
//     return (
//         <div className="modal">
//         <h2>Manage Booking</h2>
//         <div>
//           <label>Deliveryman:</label>
//           <select 
//             value={selectedDeliveryMan} 
//             onChange={(e) => setSelectedDeliveryMan(e.target.value)}
//           >
//             <option value="">Select a deliveryman</option>
//             {deliveryMen.map(dm => (
//               <option key={dm._id} value={dm._id}>
//                 {dm.name}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <label>Approximate Delivery Date:</label>
//           <input 
//             type="date" 
//             value={deliveryDate} 
//             onChange={(e) => setDeliveryDate(e.target.value)}
//           />
//         </div>
//         <button onClick={handleAssign}>Assign</button>
        
//       </div>
//     );
//   };
  
   

// export default Daly;