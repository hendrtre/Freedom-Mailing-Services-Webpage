import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-page-wrapper">
        <div className="far-left-whitespace"></div>
        <div className="maroon-ribbon"></div>
        <div className="form-container">
          <form>
            <input 
              type="text" 
              name="fullName" 
              placeholder="Your Name" 
            />

            <input 
              type="email"
              name="email"
              placeholder="Email"
            />
            
          </form>
        </div>

      </div>
    );
  }
}
