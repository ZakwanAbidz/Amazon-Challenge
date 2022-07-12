import React from 'react'
import './checkout.css';
import {SubTotal} from '../index'
import { CheckOutProducts} from '../index';
import {useStateValue} from '../../ContextAPI/StateProvider'

const CheckOut = () => {
  const [{ basket,user}, dispatch] = useStateValue();
  return (
  <div className="checkout">
          <div className='checkout__left'>
            <img
             className="checkout__ad"
             src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
             alt=""
            />
            <div className="checkout__title">
              <h3>Hello, {user.email}</h3>
              <h2>Your Shopping Basket</h2>

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

          <div className="checkout__right">
            <h2> The SubTotal will go Here</h2>
            <SubTotal />
          </div>
    </div>
    
  )
}

export default CheckOut