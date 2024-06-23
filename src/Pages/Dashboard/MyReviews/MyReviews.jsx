import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const MyReviews = () => {
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


    const [feetdback, setFeetdback] = useState([]);
    console.log("feetdbacks", feetdback);
  
  useEffect(() => {
    if(_id){
      fetch(`http://localhost:5000/feetdbacks/${_id}`)
      .then((res) => res.json())
      .then((data) =>setFeetdback(data));
    }
  }, [_id]);

  return (
   <div>
    {
    feetdback.map(feed =>  <div key={feed._id} className="card card-compact w-96 bg-base-100 shadow-xl m-auto mt-16">
      <figure><img className="rounded-full w-48 h-48 border-4 border-slate-700 p-5" src={ feed?.photoURL} alt="Shoes" /></figure>
      <div className="card-body text-center">
       
        <h2 className=" text-3xl font-bold text-center">{feed?.usersName}</h2>
        <p>{feed?.feedBackDdate}</p>
        <p>{feed?.rating}</p>
        <p>{feed?.feedback}</p>
        
        
      </div>
    </div>)
   }
   </div>
    );
};

export default MyReviews;