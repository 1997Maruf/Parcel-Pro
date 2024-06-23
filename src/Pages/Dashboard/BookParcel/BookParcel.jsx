import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";


const BookParcel = () => {
    const {user} = useContext(AuthContext);
    console.log(user)
    const bookingDate = new Date();
    const status = "pending"
    const handleBook = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const type = form.type.value;
        const weight = form.weight.value;
        const receiver = form.receiver.value;
        const phoneNumber = form.phoneNumber.value;
        const deliveryAddress = form.deliveryAddress.value;
        const deliveryDate = form.deliveryAddress.value;
        const Price = form.Price.value;
        const longitude = form.longitude.value;
        const latitude = form.latitude.value;
        
 
      console.log(name,email,phone,type,weight,receiver,phoneNumber,deliveryAddress,deliveryDate,Price,longitude,latitude);
      const booking = {status,name,email,phone,type,weight,receiver,phoneNumber,deliveryAddress,deliveryDate,Price,longitude,latitude,bookingDate}
      fetch('http://localhost:5000/booking',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(booking)
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
        <div>
          <div className=" p-24">
        <h2 className="text-3xl font-extrabold">Book a Parcel</h2>
        <form onSubmit={handleBook}>
            {/* form supplier row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" defaultValue={user?.displayName} name="name"  placeholder="Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 lg:ml-4">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <label className="input-group">
                        <input type="email" defaultValue={user?.email} name="email" placeholder="Email" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Phone Number</span>
                    </label>
                    <label className="input-group">
                        <input type="number"  name="phone"  placeholder="Phone Number" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 lg:ml-4">
                    <label className="label">
                        <span className="label-text">Parcel Type</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="type" placeholder="Parcel Type" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Parcel Weight</span>
                    </label>
                    <label className="input-group">
                        <input type="number" name="weight"  placeholder="Parcel Weight" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 lg:ml-4">
                    <label className="label">
                        <span className="label-text">Receiver’s Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="receiver" placeholder="Email" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Receivers Phone Number</span>
                    </label>
                    <label className="input-group">
                        <input type="number" name="phoneNumber"  placeholder="Parcel Weight" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 lg:ml-4">
                    <label className="label">
                        <span className="label-text">Parcel Delivery Address</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="deliveryAddress" placeholder="Parcel Delivery Address" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Requested Delivery Date</span>
                    </label>
                    <label className="input-group">
                        <input type="date" name="deliveryDate"  placeholder="Requested Delivery Date" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 lg:ml-4">
                    <label className="label">
                        <span className="label-text">Delivery Address Latitude </span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="latitude" placeholder="Delivery Address Latitude " className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Delivery Address longitude </span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="longitude"  placeholder="Delivery Address longitude " className="input input-bordered w-full" />
                    </label>
                </div>
               
            </div>
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <label className="input-group">
                        <input type="number" id="Grand-Total" name="Price"   placeholder="Delivery Address longitude " className="input input-bordered w-full" />
                    </label>
                </div>
                
            </div>
            <input type="submit" value="Book" className="btn btn-block" />

        </form>
    </div>
        </div>
    );
};

export default BookParcel;