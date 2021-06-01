import React from "react";
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
  return (
    <Router>
      <div className="app">
        <div className="app_right">
          <Switch>
            <Route path="/">
              <Header />
              <Home />
              <Bottom />
            </Route>
          </Switch>
        </div>
        <div className="app_left">
          <Switch>
            <Route path="/">
              <Ticket />
              <Bill />
              <Checkout />
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
