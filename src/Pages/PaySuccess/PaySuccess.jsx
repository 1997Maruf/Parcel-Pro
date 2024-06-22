import Confetti from "react-confetti";
import { AiFillLike } from "react-icons/ai";

const PaySuccess = () => {
  return (
    <div>
      <div className="card w-[50%] text-center mx-auto mt-20 bg-base-100 shadow-xl">
      <AiFillLike className="w-48 h-48 mx-auto"/>

        <div className="card-body">
          <h2 className="card-title text-center font-bold text-4xl mx-auto">Your Payment Pay Success</h2>
          
          </div>
        </div>
    
      <Confetti />
    </div>
  );
};

export default PaySuccess;
