import React from 'react'
import './home.css'
import { Product } from '../index'

const Home = () => {
  return (
    <div className='home'>
        
        <div className="home__image">
            <img 
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt="img" className="home__image" />
        </div>

        <div className="home__row">
          <Product 
          id="12321341"
          title="ReactJS React.js Official Logo JavaScript Framework T-Shirt"
          image="https://m.media-amazon.com/images/I/B1OGJ8t+8ZS._CLa%7C2140%2C2000%7C61aQn7IdWNL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX679_.png"
          rating={5}
          price={29.99}
          />
          <Product 
          id="5432211"
          title="Meow Mix Original Choice Dry Cat Food"
          image="https://images-na.ssl-images-amazon.com/images/I/81MnorYSumL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          rating={4}
          price={102.99}
          />
        </div>

        <div className="home__row">
        <Product 
          id="1221211"
          title="ReactJS React.js Official Logo JavaScript Framework T-Shirt"
          image="https://m.media-amazon.com/images/I/B1OGJ8t+8ZS._CLa%7C2140%2C2000%7C61aQn7IdWNL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX679_.png"
          rating={3}
          price={29.99}
          />
          <Product 
          id="1254511"
          title="Meow Mix Original Choice Dry Cat Food"
          image="https://images-na.ssl-images-amazon.com/images/I/81MnorYSumL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          rating={5}
          price={102.99}
          />
         <Product 
          id="55555"
          title="The Lean Start up"
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          rating={4}
          price={29.99}
          />
        </div>

        <div className="home__row">
        <Product 
          id="1787878"
          title="ReactJS React.js Official Logo JavaScript Framework T-Shirt"
          image="https://m.media-amazon.com/images/I/B1OGJ8t+8ZS._CLa%7C2140%2C2000%7C61aQn7IdWNL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX679_.png"
          rating={4}
          price={29.99}
          />
        </div>

        <div className="home__row">
             {/*Product*/}
                {/*Product*/}
        </div>
    </div>
  )
}

export default Home