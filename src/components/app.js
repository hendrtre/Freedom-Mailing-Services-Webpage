import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import React, { Component } from 'react';
import axios from 'axios'

import NavigationComponent from "./navigation/navigation-container";
import Home from "./pages/home";
import Contact from "./pages/contact";
import SpecializedCustomizations from "./pages/specialized-customizations";
import OtherOffers from "./pages/other-offers";
import Auth from "./pages/auth"
import NoMatch from "./pages/no-match";

import theBaldEagle from "../../static/assets/main-imgs/Bald-Eagle.jpg"

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    }

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this)
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this)
  }

  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    })
  }

  handleUnsuccessfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }

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
                fontFamily: "Dancing Script, cursive",
                fontSize: "80px",
                fontWeight: "bold",
              }}
              >
              <div 
                className="nav-img" 
                style={{
                  display: "flex",
                  justifyContent: "center",
                  background: "url(" + theBaldEagle + ") no-repeat",                                  
                  height: "140px",
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
                  transform: "translate(-50%, -50%)",
                  width: "10em",
                  color: "rgb(126, 10, 72)"
                }}
              >Freedom Mailing Services</div>
            </div>
            
            <NavigationComponent />

            {/* <h1>{this.state.loggedInStatus}</h1> */}

            <Switch>
              <Route exact path="/" component={Home} />

              <Route 
                path="/auth" 
                component={Auth} 
                render={props => (
                  <Auth 
                    {...props}
                    handleSuccessfulLogin={this.handleSuccessfulLogin}
                    handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
                  />
                )}
              />

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
