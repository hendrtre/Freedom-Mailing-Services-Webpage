import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoiceDollar, faBook, faDraftingCompass, faHardHat, faIdCard, faDatabase, faNewspaper, faUsers } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

import NavigationComponent from "./../navigation/navigation-container";

import Footer from "../Footer/footer"
import AP1995 from "../../../static/assets/AD-imgs/AmericanFlagStamp1995.jpg"

export default class AdditionalServices extends Component {
  render() {
    return (
      <div>
      <NavigationComponent />

      <div className="AD-Container">
        <div className="AD-Wrapper">
          <div className="blank">
            <p>Welcome to Freedom Mailing Services!</p>
            <p>Made By Trent Hendrickson.</p>
            <p>This hidden text is just for fun and to see if anyone can find this on their own ;)</p>
          </div>
          <div className="ribbon">
            <p>We are partnered with:</p>
            <div className="UCP">Upper Case Printing, Ink.</div>
          </div>
          <div className="AD-page">
            <h1>((Catchy line for Additional Services))</h1>
            <div className="AD-page-columns">
              <div className="grids">
                <div className="box">
                  <div className="title">
                    <FontAwesomeIcon icon={faBook} className="icon" />
                    <h2>Libraries</h2>
                  </div>
                  <p>
                    Here is some text. Just to see if this text will make things look good. 
                    Try to use an indent in these paragraphs.
                  </p>
                </div>

                <div className="box">
                  <div className="title">
                    <FontAwesomeIcon icon={faDraftingCompass} className="icon" />
                    <h2>Developmental</h2>
                  </div>
                  <p>
                    Here is some text. Just to see if this text will make things look good. Here
                    is a thought, try to use an indent in these paragraphs. Probably would look a lot 
                    better. I wonder if I drag this paragraph 
                    out a little more it will look somewhat good on the main page. ... Not bad at all.
                  </p>
                </div>

                <div className="box">
                  <div className="title">
                    <FontAwesomeIcon icon={faHardHat} className="icon" />
                    <h2>Notices for Construction & Zoneing Changes</h2>                    
                  </div>
                  <p>Here is some text.</p>
                </div>

                <div className="box">
                  <div className="title">
                    <FontAwesomeIcon icon={faFileInvoiceDollar} className="icon" />
                    <h2>Tax Notices</h2>
                  </div>
                  <p>Here is some text.</p>
                </div>

                <div className="box">
                  <div className="title">
                    <FontAwesomeIcon icon={faIdCard} className="icon" />
                    <h2>Voter Id</h2>
                  </div>
                  <p>Here is some text.</p>
                </div>

                <div className="box">
                  <div className="title">
                    <FontAwesomeIcon icon={faDatabase} className="icon" />
                    <h2>Backup City</h2>
                  </div>
                  <p>Here is some text.</p>
                </div>

                <div className="box">
                  <div className="title">
                    <FontAwesomeIcon icon={faNewspaper} className="icon" />
                    <h2>Saturation</h2>
                  </div>
                  <p>Here is some text.</p>
                </div>

                <div className="box">
                  <div className="title">
                    <FontAwesomeIcon icon={faUsers} className="icon" />
                    <h2>Public Hearing Info.</h2>
                  </div>
                  <p>Here is some text.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="AD-page-sidebar">
            <img src={AP1995} alt="AP1995" />
          </div>
        </div>
        <Footer />
      </div>
      </div>
    );
  }
}
