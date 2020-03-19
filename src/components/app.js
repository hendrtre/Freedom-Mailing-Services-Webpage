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
              className="nav-title-wrapper"
              style={{
                position: "relative",
                textAlign: "center",
                color: "#530000",
                // color: "$maroon",
                fontFamily: "Dancing Script, cursive",
                fontSize: "55px",
              }}
            >
              <div 
                className="nav-img" 
                style={{
                  display: "flex",
                  justifyContent: "center",
                  background: "url(" + theBaldEagle + ") no-repeat",                                  
                  height: "100px",
                  backgroundPosition: "50% 30%",
                  backgroundSize: "cover",
                  opacity: "0.25"
                }}
              />
              <div 
                className="nav-title"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)"
                }}
              >Freedom Mailing Services</div>
            </div>

            {/* <div className="nav-title-wrapper">
              <div 
                className="nav-img"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  background: "url(" + theBaldEagle + ") no-repeat",
                  color: "#530000",
                  // color: "$maroon",
                  fontFamily: "Dancing Script, cursive",
                  fontSize: "55px",
                  height: "90px",
                  backgroundPosition: "50% 30%",
                  backgroundSize: "cover",
                  opacity: "0.25"
                }}
              >
                Freedom Mailing Services
              </div>
              <div className="nav-title">Freedom Mailing Services!!!</div>
            </div> */}

            
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
