import { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
// import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { IdealBankElement } from "@stripe/react-stripe-js";

const AllParcel = () => {
  let [isOpen, setIsOpen] = useState(false);
 const [_id, set_Id] = useState();
  function open(id) {
    setIsOpen(true);
    set_Id(id._id);
  }

  function close() {
    setIsOpen(false);
  }

  const [bookings, setBookings] = useState([]);
  console.log(bookings.booking);
  const url = "http://localhost:5000/booking";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  const [deliveryMans, setDeliveryMans] = useState([]);
  console.log('deliveryMan',deliveryMans);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        const deliveryMan = data.filter((man) => man.role === "delivery");
        setDeliveryMans(deliveryMan);
      });
  }, []);


  const handleSubmit= (event)  => {
    event.preventDefault();
    const form = event.target;
    const name = form.value.value;
    const aoximatedate = form.aoximatedate.value;
    console.log(name,aoximatedate)
    const updateBooking = { name, aoximatedate}
    fetch(`http://localhost:5000/booking/${_id}`, {
    method: 'PUT',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(updateBooking)
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
          {bookings.map((booking, index) => (
            <tr key={booking._id}>
              <th>{index + 1}</th>
              <td>{booking.name}</td>
              <td>{booking.phone}</td>
              <td>{booking.bookingDate}</td>
              <td>{booking.deliveryDate}</td>
              <td>{booking.Price}</td>
              <td>pending</td>
              <td>
                <Button
                  onClick={()=>open(booking)}
                  className="rounded-md  btn-outline btn-secondary py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
                >
                  Manage
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative  z-10 focus:outline-none"
          onClose={close}
        >
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl">
                  {/* model component */}
                  <form onSubmit={handleSubmit}>
                  <select >
              
              {deliveryMans?.map(option=> <option name='name' key={option?._id} value={option?._id}>
                  {option?.name}
                </option>)
              }
            </select>
                     
                    
                    <input className="ml-5" type="date" name="aoximatedate" />

                    <input className="bg-orange-400 ml-7" type="submit" value='submit' />
                  </form>
                  {/* {deliveryMan?.map((delivery) => (
                    <Model key={delivery?._id} delivery={delivery}></Model>
                  ))} */}
                  <div className="mt-4">
                    <Button
                      className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                      onClick={close}
                    >
                      Got it, thanks!
                    </Button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default AllParcel;
