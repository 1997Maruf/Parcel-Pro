import { Link } from "react-router-dom";



const BookingRow = ({booking}) => {
    const {_id,name,phone,bookingDate,deliveryDate,Price,status} = booking;
    return (
         <tbody>
            <tr>
              <th>1</th>
              <td>{name}</td>
              <td>{phone}</td>
              <td>{bookingDate}</td>
              <td>{deliveryDate}</td>
              <td>{Price}</td>
              <td>{status}</td>
              <td>
                <Link  to= {`/dashboard/daly/${_id}`}> Manage</Link>
              </td>
            </tr>
            </tbody>
      
    );
};

export default BookingRow;