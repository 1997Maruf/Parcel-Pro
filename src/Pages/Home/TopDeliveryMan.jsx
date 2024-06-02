import { useEffect, useState } from "react";
import CardEdt from "./CardEdt";


const TopDeliveryMan = () => {
    const [mans, setMans] = useState([]);
     console.log(mans)
    useEffect(() =>{
        fetch('json.json')
        .then(res => res.json())
        .then(data => setMans(data))
    },[])
    return (
        <div className="mt-20">
            <h2 className="text-3xl font-bold text-center">Top 3 Delivery Men</h2>
           <div  className="flex gap-8 justify-center items-center mt-10">
           {
                mans.map(man => <CardEdt key={man._id} man={man}></CardEdt>)
            }
           </div>
        </div>
    );
};

export default TopDeliveryMan;