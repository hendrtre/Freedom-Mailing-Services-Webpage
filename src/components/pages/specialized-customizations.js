import React, { Component } from "react";
import { NavLink } from 'react-router-dom'

import NavigationComponent from "../navigation/navigation-container"
import Footer from "../Footer/footer"

import LehiBill from "../../../static/assets/SC-imgs/LehiBills1up1.jpg"

import EGMT from "../../../static/assets/SC-imgs/Black_white samples/Eagle-mtn-page-001.jpg"
import BattleM from "../../../static/assets/SC-imgs/Black_white samples/Battlement-Mesa-page-001.jpg"
import Monticello from "../../../static/assets/SC-imgs/Black_white samples/Monticello-page-001.jpg"

import Bonavista from "../../../static/assets/SC-imgs/2 color samples/Bonavista-001.jpg"
import HeberLight from "../../../static/assets/SC-imgs/2 color samples/Heber-Light-page-001.jpg"
import Gorgoza from "../../../static/assets/SC-imgs/2 color samples/Gorgoza-page-001.jpg"

import DiscoveryBay from "../../../static/assets/SC-imgs/full color samples/Discovery-bay-page-001.jpg"
import Perry from "../../../static/assets/SC-imgs/full color samples/Perry-OK-page-001.jpg"
import Yucaipa from "../../../static/assets/SC-imgs/full color samples/Yucaipa-page-001.jpg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

export default class SpecializedCustomizations extends Component {
  render() {
    return (
      <div>
      <NavigationComponent />

      <div className="special-page">
        {/* <Router> */}
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
              <p>For a Priceing Quote, call us at: (801)-373-2131</p>
              <p>We work with over 130 cities!</p>
          </div>
          <div className="SC-page">
            {/* <Switch> */}
            {/* <Route path="/blackWhiteTemp" component={BlackAndWhite} /> */}


            <h1>We customize to fit your needs. </h1>
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
                  <NavLink to="/blackWhiteTemp">
                    <div className="sample-imgs">
                      <img src={Monticello} className="Monticello" alt="Monticello"/>
                      <img src={BattleM} className="BattleM" alt="BattlementMesa"/>
                      <img src={EGMT} className="EagleMTN" alt="EagleMTN"/>
                    </div>
                  </NavLink>
                  <div className="text-holder">
                    <h3>Black & White Templates.</h3>
                    <p>
                      ""((Test text to see if this works. I need to add a lot more text here in order to see 
                      how well this is going to fit inside its designated area.))""
                    </p>
                    <NavLink to="/blackWhiteTemp" className="learnMore" >
                      <FontAwesomeIcon icon={faArrowAltCircleLeft} className="leftArrow" />
                        LEARN MORE
                    </NavLink>
                  </div>
                </div>

                <div className="box">
                  <NavLink to="/TwoColor">
                    <div className="sample-imgs">
                      <img src={HeberLight} className="HeberLight" alt="HeberLight"/>
                      <img src={Bonavista} className="Bonavista" alt="Bonavista"/>
                      <img src={Gorgoza} className="Gorgoza" alt="Gorgoza"/>
                    </div>
                  </NavLink>
                  <div className="text-holder">
                    <h3>Two Color Templates.</h3>
                    <p>Test text to see if this works. 2 color samples. I like the two color samples.</p>
                    <NavLink to="/TwoColor" className="learnMore" >
                      <FontAwesomeIcon icon={faArrowAltCircleLeft} className="leftArrow" />
                        LEARN MORE
                    </NavLink>
                  </div>
                </div>

                <div className="box">
                  <NavLink to="/FullColor">
                    <div className="sample-imgs">
                      <img src={Perry} className="Perry" alt="Perry"/>
                      <img src={Yucaipa} className="Yucaipa" alt="Yucaipa"/>
                      <img src={DiscoveryBay} className="DiscoveryBay" alt="DiscoveryBay"/>
                    </div>
                  </NavLink>
                  <div className="text-holder">
                    <h3>Full Color Templates.</h3>
                    <p>Test text to see if this works. Full color samples.</p>
                    <NavLink to="/FullColor" className="learnMore" >
                      <FontAwesomeIcon icon={faArrowAltCircleLeft} className="leftArrow" />
                        LEARN MORE
                    </NavLink>
                  </div>
                </div>

                <div className="box">
                  <img src={LehiBill} alt="LehiBill"/>
                  <div className="text-holder">
                    <h3>Title Here</h3>
                    <p>Test text to see if this works.</p>
                    <plaintext> <FontAwesomeIcon icon={faArrowAltCircleLeft} className="leftArrow" /> Learn More</plaintext>
                  </div>
                </div>
                
                <div className="box">
                  <img src={LehiBill} alt="LehiBill"/>
                  <div className="text-holder">
                    <h3>Title Here</h3>
                    <p>Test text to see if this works.</p>
                    <plaintext> <FontAwesomeIcon icon={faArrowAltCircleLeft} className="leftArrow" /> Learn More</plaintext>
                  </div>
                </div>
              </div>
            </div>
            {/* </Switch> */}
          </div>
        </div>
        <Footer />
        {/* </Router> */}
      </div>
      </div>
    );
  }
}