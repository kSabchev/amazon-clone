import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
      <Header />
        <Switch>
          <Route path="/checkout">
            <h1> I AM CHECKOUT</h1>
          </Route>
        </Switch>

        <Route path="/">
          <Home />
        </Route>
      </div>
    </Router>
  );
}

export default App;
