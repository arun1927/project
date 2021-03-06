import React, { useState } from "react";
import "./App.css";
import "./Header.js";
import Header from "./Header.js";
import Ticket from "./Ticket.js";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Bottom from "./Bottom";
import Bill from "./Bill";
import Sample from "./Sample";

function App() {
  const [cart,setCart]= useState([])
  const selectFuntion =(item)=>{
    setCart([...cart,item])
  }
  return (
    <Router>
      <div className="app">
        <div className="app_right">
          <Switch>
            <Route path="/">
              <Header />
              <Home  select={(item)=>{selectFuntion(item)}}/>
              <Bottom />
            </Route>
          </Switch>
        </div>
        <div className="app_left">
          <Switch>
            <Route path="/">
              <Ticket />
              <Bill cart={cart}/>
           
            </Route>
          </Switch>
        </div>
        <Switch>
          <Route path="/Sample">
            <Sample />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
