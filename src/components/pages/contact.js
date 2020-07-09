import React, { Component } from "react";
import NavigationComponent from "../navigation/navigation-container"
// TODO MAKE ICONS NEXT TO PHONE AND ADDRESS

export default class Contact extends Component {
  render() {
    return (
      <div>
      <NavigationComponent />

      <div className="contact-page-wrapper">
        <div className="far-left-whitespace"></div>
        <div className="maroon-ribbon"></div>

        <div className="right-side">
          <div className="contact-context">For further information or questions, contact us at:</div>
          <div className="phone-address">
            <div className="phone">(801) 373-2131</div>
            <div className="address">459 W Center St. Orem, Utah 84057</div>
          </div>

          <div className="form-container">
            <form action="" className="form">
              <div className="name-email-wrapper">
                <div className="form-group-fullName">
                  <input 
                    type="text" 
                    name="fullName" 
                    placeholder="Name" 
                  />
                  <label htmlFor="name">Your Name</label>
                </div>

                <div className="form-group">
                  <input 
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                  <label htmlFor="email">Email</label>
                </div>
              </div>

              <div className="form-group">
                <textarea name="message" id="message" rows="7" placeholder="Description"></textarea>
              </div>

              <button type="submit" className="btn-send">Send</button>
            </form>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
