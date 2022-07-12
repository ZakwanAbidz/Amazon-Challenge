import React, { useEffect } from "react";
import './App.css';
import {Header, Home,CheckOut,Login,Payment} from './Components/index';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import {useStateValue} from './ContextAPI/StateProvider';
import { auth } from './Components/FireBase/firebase';
import { Elements } from "@stripe/react-stripe-js";
import {loadStripe } from "@stripe/stripe-js";

const promise = loadStripe(
  "pk_test_51LHQspFOqi9LNnUd8gGN9JVjtxWeZfFRqFB1dBq3NdBCFerY6G0u544HeeFGkKuaoQ0wWD5qZCcsCEZNyJaBF99x0046WJkvRE"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);




  return (
    <BrowserRouter>
      <div className="App">
      <Header />
        <Routes> 
          <Route path="/checkout" element={
                <>
                <CheckOut />
                </>
          } />
          <Route path="/" element={
                <>
                <Home />
                </>
          } />
          <Route path="/payment" element={
                <>
                 <Elements stripe={promise}>
                <Payment />
                </Elements>
                </>
          } />
               <Route path="/login" element={
                <>
                <Login />
                </>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
