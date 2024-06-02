import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSpatialTracking } from "react-icons/md";


const FeaturesSection = () => {
    return (
  <div className="mt-10">
    <h2 className="text-3xl font-bold text-center">Top 3 Delivery Men</h2>
    <div className="flex gap-8 justify-center items-center">
        
        <div className="card w-96 bg-base-100 shadow-xl">
           <AiOutlineSafetyCertificate className="w-full h-32 mt-10" />
 <div className="card-body">
   <h2 className="card-title"> Parcel Safety</h2>
   <p>Your parcels are secured with top-notch safety protocols and tracking features.</p>
 </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
        <TbTruckDelivery className="w-full h-32 mt-10" />
 <div className="card-body">
   <h2 className="card-title"> Super Fast Delivery</h2>
   <p>Experience blazing fast delivery times with our optimized routing and logistics.</p>
 </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
           <MdSpatialTracking className="w-full h-32 mt-10" />
 <div className="card-body">
   <h2 className="card-title">Real-Time Tracking</h2>
   <p>Keep an eye on your parcel with our real-time tracking feature, available 24/7.</p>
 </div>
        </div>
      </div>
  </div>
      
    );
};

export default FeaturesSection;