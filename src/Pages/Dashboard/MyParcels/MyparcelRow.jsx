import { Link } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import {
  Button,
  Dialog,
  DialogPanel,
 
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { deleteField } from "firebase/firestore/lite";
const MyparcelRow = ({booking}) => {
  console.log("booking",booking);
  
    const {type,deliveryDate,bookingDate,_id,status,deliveryMenId,approximateDate}= booking;
    console.log("deliveryman id",deliveryMenId);
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
           fetch(`https://parcel-pro-server-livid.vercel.app/${_id}`,{
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
    let [isOpen, setIsOpen] = useState(false);
   function open() {
     setIsOpen(true); 
   }
   function close() {
     setIsOpen(false);
   }
   const {user} = useContext(AuthContext);
   const {displayName,photoURL} = user;
   const feedBackDdate = new Date()
   const handleSubmit= (event)  => {
    event.preventDefault();
    const form = event.target;
    const usersName = form.usersName.value;
    const feedback = form.feedback.value;
    const rating = form.rating.value;
   const feetdback = {displayName,rating,photoURL,feedback,usersName,deliveryMenId,feedBackDdate};
   console.log("may feedback",feetdback)
   fetch('https://parcel-pro-server-livid.vercel.app//feetdbacks',{
    method: 'POST',
    headers: {
        'content-type' : 'application/json'
    },
    body : JSON.stringify(feetdback)
})
.then(res => res.json())
.then(data => {
    console.log(data);
    if(data.insertedId){
        Swal.fire({
            title: 'Success!',
            text: 'Booking Added Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
    }
})
  }
    return (
        
        <tbody className="overflow-x-auto">
        {/* row 1 */}
          <tr >
              <th>1</th>
              <td >{type}</td>
              <td >{deliveryDate}</td>
              <td >{approximateDate}</td>
              <td >{bookingDate}</td>
              <td >{deliveryMenId}</td>
              <td >{status}</td>
              <td >  <Link to= {`/dashboard/up/${_id}`} className="btn btn-outline btn-secondary">Update</Link></td>
              <td><button onClick={() => haldelDelete(_id)} className="btn btn-outline btn-warning">Cancel</button></td>
              <td><Button
                  onClick={open}
                  className="rounded-md  btn-outline btn-secondary py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
                >
                  Review
                </Button> </td>
              <td><Link to={`/dashboard/pay/${_id}`} className="btn btn-outline btn-info">Pay</Link></td>
            </tr>
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
                    <input className="ml-5" type="text" defaultValue={user.displayName} name="usersName" placeholder="Users Name" />
                    <input className="ml-5 mt-8" type="text"  name="feedback" placeholder="Feedback Tex" />
                    <input className="ml-5 mt-8" type="number"  name="rating" placeholder="rating" />
                    
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
      </tbody>
             
    );
};

export default MyparcelRow;