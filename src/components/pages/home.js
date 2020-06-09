import React, { Component } from "react";
import axios from 'axios'
import AP1995 from "../../../static/assets/home-imgs/AmericanFlagStamp1995.jpg"

export default class Home extends Component {
  render() {
    return (
      <div className="home-content-page-wrapper">
        <div className="blank">
          <p>Welcome to Freedom Mailing Services!</p>
          <p>Made By Trent Hendrickson.</p>
          <p>This hidden text is just for fun and to see if anyone can find this on their own ;)</p>
        </div>
        <div className="ribbon">
          <div className="ribbon-container">
            <p>We are partnered with</p>
          </div>
            <p>Upper Case Printing</p>
        </div>
        <div className="home-page">
          <h1>"From Your Office To The Post Office!"</h1>
          <h2>"From Your Office To The Post Office!"</h2>
          <h3>"From Your Office To The Post Office!"</h3>
          <p>Over 32 years of services, ..... </p>
          <p>
              We specialize in providing the
              individualized, detailed attention your
              city/utility company deserves. Time,
              accuracy and image is essential. The faster and more accurate the statement is
              produced and mailed, the sooner the customer receives and pays their bill. We know
              from experience that cities and utility companies want their statement to reflect their
              individuality. Our pricing and services make it possible for cities/utility companies
              to design their statements to best convey their image and information for their
              residents. Using a custom form allows your image to be prominently promoted and
              residents feel more informed and part of the community. Our focus is to lighten your
              work load so your staff can better serve your customers needs.
          </p>

        </div>
        <div className="home-page-images">
          <img src={AP1995} alt="AP1995"/>
        </div>
      </div>
    );
  }
}
