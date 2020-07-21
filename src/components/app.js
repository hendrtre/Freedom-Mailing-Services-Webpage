import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import React, { Component } from 'react';
import axios from 'axios'

import NavigationComponent from "./navigation/navigation-container";
import Home from "./pages/home";
import Contact from "./pages/contact";
import SpecializedCustomizations from "./pages/specialized-customizations";
import AdditionalServices from "./pages/additional-services";
import Auth from "./pages/auth"
import NoMatch from "./pages/no-match";

import BlackAndWhite from "./SCTempPages/B&W-page";
import TwoColor from "./SCTempPages/2color"
import FullColor from "./SCTempPages/FullColor"
import UsageGraphs from "./SCTempPages/UsageGraphs"
import PostCards from "./SCTempPages/PostCards"

import theBaldEagle from "../../static/assets/main-imgs/Bald-Eagle.jpg"

export default class App extends Component {
  render() {    
    return (
      <div className='app'>
        <Router>
          <div>
            {/* <div className="nav-title-wrapper">

              <div className="nav-img" />

              <div className="nav-title">Freedom Mailing Services</div>
            </div> */}
            
            {/* <NavigationComponent /> */}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/contact" component={Contact} />
              <Route path="/specialized-customizations" component={SpecializedCustomizations} />
              <Route path="/other-offers" component={AdditionalServices} />

              <Route path="/blackWhiteTemp" component={BlackAndWhite} />
              <Route path="/TwoColor" component={TwoColor} />
              <Route path="/FullColor" component={FullColor} />
              <Route path="/UsageGraphs" component={UsageGraphs} />
              <Route path="/PostCards" component={PostCards} />

              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
