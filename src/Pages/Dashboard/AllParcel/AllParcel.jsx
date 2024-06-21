import { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";

const AllParcel = () => {
  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  
  const [bookings, setBookings] = useState([]);
  console.log(bookings);
  const url = "http://localhost:5000/booking";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  const [deliveryMan, setDeliveryMan] = useState([]);
  console.log(deliveryMan)
   
    useEffect(() => {
        fetch('http://localhost:5000/users')
          .then((res) => res.json())
          .then(data => {
             const deliveryMan = data.filter(man => man.role === 'delivery');
             setDeliveryMan(deliveryMan)
          });
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
                  onClick={open}
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
                  <DialogTitle
                    as="h3"
                    className="text-base/7 font-medium text-white"
                  >
                    <select className="bg-black">
                    {
                      deliveryMan?.map(delivery =><option key={delivery._id} value="">{delivery?.name}</option>
                      )
                    }
                    </select>
                    
                  </DialogTitle>
                  <input type="text" placeholder="Approximate delivery date" className="input mt-20 input-bordered w-full max-w-xs" />

                  <button className="btn btn-outline btn-warning ml-40 mt-10">Assign</button>
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
