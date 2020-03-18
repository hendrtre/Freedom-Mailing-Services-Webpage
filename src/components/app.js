import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import React, { Component } from 'react';


import NavigationComponent from "./navigation/navigation-container";
import Home from "./pages/home";
import Contact from "./pages/contact";
import SpecializedCustomizations from "./pages/specialized-customizations";
import OtherOffers from "./pages/other-offers";
import NoMatch from "./pages/no-match";

import theBaldEagle from "../../static/assets/bald-eagle/Bald-Eagle.jpg"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
          <div 
            className="nav-title"
            style={{
              display: "flex",
              justifyContent: "center",
              background: "url(" + theBaldEagle + ") no-repeat",
              color: "#530000",
              fontFamily: "Dancing Script, cursive",
              fontSize: "55px",
              // width: "",
              height: "90px",
              backgroundPosition: "center"
            }}
          >
            Freedom Mailing Services
          </div>
          <div>Welcome to Freedom Mailing Services!</div>
          <NavigationComponent />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/specialized-customizations" component={SpecializedCustomizations} />
            <Route path="/other-offers" component={OtherOffers} />
            {/* <Route
                exact
                path="/portfolio/:slug"
                component={PortfolioDetail}
              /> */}
            <Route component={NoMatch} />
          </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
