import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-page-wrapper">
        <div className="far-left-whitespace"></div>
        <div className="maroon-ribbon"></div>

        <div className="right-side">
          <h1>For further information or questions, contact us at:</h1>

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
    );
  }
}
