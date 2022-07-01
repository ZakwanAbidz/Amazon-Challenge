import React, { useEffect } from "react";
import './App.css';
import {Header, Home,CheckOut,Login} from './Components/index';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import {useStateValue} from './ContextAPI/StateProvider';
import { auth } from './Components/FireBase/firebase';

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
