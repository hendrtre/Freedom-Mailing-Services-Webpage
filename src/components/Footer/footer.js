import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faFlagUsa } from "@fortawesome/free-solid-svg-icons";

export default class Footer extends Component {
    render () {
        return (
            <div className="footer-wrapper">
                {/* <p>For more information, reach out to us directly:</p> */}
                {/* <h3>For more information, reach out to us directly:</h3> */}
                <h2>For more information, reach out to us directly:</h2>
                <div className="footer-container">
                    <div className="leftBlank">
                        <FontAwesomeIcon icon={faFlagUsa} flip="horizontal" className="usaFlag" />
                    </div>
                    <div className="leftSide">
                        {/* <p>For priceing quotes, call us at: (801)-373-2131.</p> */}
                        {/* <h1>For priceing quotes, call us at: (801)-373-2131.</h1> */}
                        {/* <h2>For priceing quotes, call us at: (801)-373-2131.</h2> */}
                        {/* <h3>For priceing quotes, call us at: (801)-373-2131.</h3> */}
                        <h3>For priceing quotes, call us at: </h3>
                        <h3>(801)-373-2131</h3>
                    </div>
                    <div className="rightSide">
                        {/* <p>Connect with us!</p> */}
                        <h3>Connect with us!</h3>
                        <a href="https://www.facebook.com/freedomanduppercase/" target="_blank">
                            <FontAwesomeIcon icon={faFacebookSquare} className="facebookIcon" />
                            {/* <FontAwesomeIcon icon={faFacebook} className="facebookIcon" /> */}
                        </a>
                    </div>
                    <div className="rightBlank">
                        <FontAwesomeIcon icon={faFlagUsa} className="usaFlag" />
                    </div>
                </div>
            </div>
        )
    }
}