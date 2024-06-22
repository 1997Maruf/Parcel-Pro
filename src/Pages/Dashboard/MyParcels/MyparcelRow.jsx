import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyparcelRow = ({booking}) => {
    const {type,deliveryDate,bookingDate,_id, status}= booking;
    const haldelDelete = _id =>{
        console.log(_id);
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              "Deleted!",
              "Your file has been deleted.",
               "success"
            )
           fetch(`http://localhost:5000/booking/${_id}`,{
            method: 'DELETE'
           } )
           .then(res => res.json())
           .then(data =>{
            console.log(data);
            if(data.deletedCount > 0){
              Swal.fire(
              "Deleted!",
              "Your file has been deleted.",
               "success"
            )
            }
           })
          }
        });
      }
    return (
        
        <tbody>
        {/* row 1 */}
          <tr>
              <th>1</th>
              <td>{type}</td>
              <td>{deliveryDate}</td>
              <td>{deliveryDate}</td>
              <td>{bookingDate}</td>
              <td>Delivery Men ID</td>
              <td>{booking.status}</td>
              <td >  <Link to= {`/dashboard/up/${_id}`} className="btn btn-outline btn-secondary">Update</Link></td>
              <td><button onClick={() => haldelDelete(_id)} className="btn btn-outline btn-warning">Cancel</button></td>
              <td><button className="btn btn-outline btn-success"> Review</button></td>
              <td><Link to={`/dashboard/pay/${_id}`} className="btn btn-outline btn-info">Pay</Link></td>
            </tr>
           
      </tbody>
             
    );
};

export default MyparcelRow;