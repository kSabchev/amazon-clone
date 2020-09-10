import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"



const promise = loadStripe(
  "pk_test_51HPvTmFxsLwZLh7A7QzcmRjQRSs6Ht0J9FT5aVmfoee2Ub1sU7SR92m2unP2TRafp2q25c5S7eZPzCwAlsUsv4VC00ynabgnSz"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once the component loads

    auth.onAuthStateChanged((authUser) => {
      console.log("USER >>>", authUser);

      if (authUser) {
        // the user just logged in / was logged in

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
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
