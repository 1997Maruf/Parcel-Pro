import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Pay_Gateway_Pk);
const Pay = () => {
    
    return (
        <div>
            <h2 className="text-5xl text-center text-green-600 mt-7">Pay Bill</h2>
            <Elements stripe={stripePromise}>
              <CheckoutForm ></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Pay;