import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Component } from 'react';


import NavigationComponent from "./navigation/navigation-container";
import Home from "./pages/home";
import Contact from "./pages/contact";
import SpecializedCustomizations from "./pages/specialized-customizations";
import OtherOffers from "./pages/other-offers";
import NoMatch from "./pages/no-match";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
          <h1>Welcome to Freedom Mailing Services!</h1>
          <NavigationComponent />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/specialized-customizations" component={SpecializedCustomizations} />
            <Route path="/other-offers" component={OtherOffers} />
            <Route component={NoMatch} />
          </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
