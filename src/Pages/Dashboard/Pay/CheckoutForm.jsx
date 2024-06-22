import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import Confetti from 'react-confetti'
const CheckoutForm = () => {
    const naviget =useNavigate();
    const parcel = useLoaderData();
    const {Price} = parcel;
    console.log(parcel.Price)
    const [error, setError] = useState();
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);
    useEffect(()=>{
      if(Price){
        axiosSecure.post('/create-payment-intent',{price:Price})
        .then(res => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        })
      }
    },[axiosSecure,Price])
    const handleSubmit = async (event) =>{
        event.preventDefault();
        if(!stripe || !elements){
            return
        }
        const card = elements.getElement(CardElement)
        if(card === null){
            return
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if(error){
            console.log('payment error', error)
            setError(error.message);
        }
        else{
            console.log('payment method', paymentMethod)
            setError('');
        }
        //confirm payment
       const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: card,
            billing_details: {
                email: user?.email ||'anonymous',
                name: user?.displayName ||'anonymous'
            }
        }
       })
        if(paymentIntent){
            console.log('payment intent', paymentIntent),
            naviget("/dashboard/pay-success")
        }
        else{
            console.log('confirm error', confirmError) 
        }
    }
    return (
        <form className="lg:mx-72 rounded-3xl bg-lime-600 py-20 px-6 mt-14" onSubmit={handleSubmit}>
          <CardElement 
          options={{
            style:{
                base:{
                    fontSize: '16px',
                    color: '#ffff',
                    '::placeholder': {
                      color: '#fff',
                    }
                },
                invalid:{
                    color: '#ffff'
                }
            }
          }}
          >
            
          </CardElement>
          <button className="bg-cyan-600 mt-6 rounded-3xl text-white ml-9 px-10" type="submit" disabled={!stripe || !clientSecret }>
        Pay
      </button>
      <p className="text-red-600">{error}</p>
        </form>
    );
};

export default CheckoutForm;