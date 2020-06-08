import React, { Component } from "react";
import axios from 'axios'

export default class Home extends Component {
  render() {
    return (
      <div className="home-content-page-wrapper">
        <div className="blank">
          <p>Welcome to Freedom Mailing Services!</p>
          <p>Made By Trent Hendrickson</p>
        </div>
        <div className="ribbon">
          <p>marron ribbon</p>
        </div>
        <div className="home-page">
          <h1>I am the Home Page</h1>
        </div>
      </div>
    );
  }
}
