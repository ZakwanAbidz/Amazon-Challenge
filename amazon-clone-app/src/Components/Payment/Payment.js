import React from 'react'
import './payment.css'
import {useStateValue} from '../../ContextAPI/StateProvider'
import CheckOutProducts from '../CheckOutProducts/CheckOutProducts'
import { Link} from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from 'react';
import CurrencyFormat from "react-currency-format";
import {getBasketTotal} from '../../ContextAPI/Reducer';

const Payment = () => {

    const [{ basket,user }, dispatch] = useStateValue();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit=e=>{
        // do all fancy stripe Stuf......
    }

    const handleChange=event=>{
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

  return (
    <div className='Payment'>
        <div className='payment__container'>
            <h1>
                    Checkout (
                        <Link to="/checkout">{basket?.length} items</Link>
                        )
            </h1>

            {/* Payment Section --> delivery Address*/}
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Delivery Address</h3>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
            </div>

            {/* Payment Section --> Review Items*/}
            <div className="payment__section">
                <div className='payment__title'>
                    <h3>Review items and delivery</h3>
                </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckOutProducts
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                           />
                        ))}    
                    </div>
            </div>

            {/* Payment Section --> Payment Method*/}
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment__detail">
                    {/* Stripe Here*/}
                    <form>
                        <CardElement onChange={handleChange}/>
                        <div className='payment__priceContainer'>
                        <CurrencyFormat
                                        renderText={(value) => (
                                            <h3>Order Total: {value}</h3>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$"}
                        />
                        
                            <button disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                            </button>

                            {/* Errors */}
                            {error && <div>{error}</div>}

                        </div>
                    </form>
                  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment