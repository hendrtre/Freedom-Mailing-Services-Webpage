import React, { Component } from "react";
import AP1995 from "../../../static/assets/SC-imgs/AmericanFlagStamp1995.jpg"
import LehiBill from "../../../static/assets/SC-imgs/LehiBills1up1.jpg"
import Footer from "../Footer/footer"
 

export default class SpecializedCustomizations extends Component {
  render() {
    return (
      <div className="special-page">
        <div className="Special-content-page-wrapper">
          <div className="blank">
            <p>Welcome to Freedom Mailing Services!</p>
            <p>Made By Trent Hendrickson.</p>
            <p>This hidden text is just for fun and to see if anyone can find this on their own ;)</p>
          </div>
          <div className="ribbon">
              <p>We are partnered with:</p>
              <div className="UCP">Upper Case Printing, Ink.</div>
              <p>We can print your custom forms and envelopes in-house!</p>
          </div>
          <div className="SC-page">
            <h1>We customize to fit your needs. "(?)"</h1>
            <p>
              Municipal, City, and Utility companies all deserve clear, clean, and defined statements that 
              relay their information to their residents. "(?)""
            </p>
            <p>
              Below are examples of what we can provide ... "(?)"
            </p>
            <div className="SC-page-columns">
              <div className="grids">
                <div className="box">
                  <img src={LehiBill} alt="LehiBill"/>
                  <p>Test text to see if this works.</p>
                </div>
                <div className="box">
                  <img src={LehiBill} alt="LehiBill"/>
                  <p>Test text to see if this works.</p>
                </div>
                <div className="box">
                  <img src={LehiBill} alt="LehiBill"/>
                  <p>Test text to see if this works.</p>
                </div>
                <div className="box">
                  <img src={LehiBill} alt="LehiBill"/>
                  <p>Test text to see if this works.</p>
                </div>
                <div className="box">
                  <img src={LehiBill} alt="LehiBill"/>
                  <p>Test text to see if this works.</p>
                </div>
              </div>

            </div>
          </div>
          <div className="SC-page-sidebar">
              <img src={AP1995} alt="AP1995"/>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}