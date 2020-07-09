import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import FMSLogo from '../../../static/assets/main-imgs/FMS-logo-w-words-2.jpg'
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavigationComponent = (props) => {
    return (
        <div>
            <div className="nav-title-wrapper">
                <div className="nav-img" />
                <div className="nav-title">Freedom Mailing Services</div>
            </div>

            <div 
                className="logo-position"
                style={{
                    position: "absolute",
                    left: "50px",
                    top: "113px"
                }}
            >
                <img 
                    src={FMSLogo} 
                    alt="Dark logo" 
                    width="175" 
                    height="136" 
                    style={{
                        border: "black",
                        borderStyle: "double"
                    }}
                />
            </div>

            <div className="Navigation-wrapper">
                <div className="left-side">
                    {/* I'm just a place holder. So the hover effect under the navlinks don't get messed up. */}
                </div>
                <div className="right-side">
                    <div className="nav-link-wrapper">
                        <NavLink exact to="/" activeClassName="nav-link-active">
                            Home
                        </NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink to="/specialized-customizations" activeClassName="nav-link-active">
                            <div className="special">
                                Specialized Customizations 
                            </div>
                        </NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink to="/other-offers" activeClassName="nav-link-active">
                            Additional Services
                        </NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink to="/contact" activeClassName="nav-link-active">
                            Contact
                        </NavLink>
                    </div>
                </div>
                <FontAwesomeIcon icon={faBars} className="Bars" />
            </div>
        </div>
    )
}

export default NavigationComponent