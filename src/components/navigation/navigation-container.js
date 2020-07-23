import React, { Component } from 'react'
// import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import FMSLogo from '../../../static/assets/main-imgs/FMS-logo-w-words-2.jpg'
import { faBars, faFeatherAlt } from '@fortawesome/free-solid-svg-icons';

// const NavigationComponent = (props) => {
class NavigationComponent extends Component {

    container = React.createRef();
    state = {
      open: false,
    };
    componentDidMount() {
      document.addEventListener("mousedown", this.handleClickOutside);
    }
    componentWillUnmount() {
      document.removeEventListener("mousedown", this.handleClickOutside);
    }
    handleClickOutside = event => {
      if (this.container.current && !this.container.current.contains(event.target)) {
        this.setState({
          open: false,
        });
      }
    };
    handleButtonClick = () => {
      this.setState(state => {
        return {
          open: !state.open,
        };
      });
    };

    render() {
        return (
            <div>
                <div className="nav-title-wrapper">
                    <div className="nav-img" />
                    <div className="nav-title">Freedom Mailing Services</div>
                </div>

                <div 
                    className="logo-position"
                    style={{
                        // position: "absolute",
                        // left: "50px",
                        // top: "113px"
                    }}
                >
                    <img 
                        src={FMSLogo} 
                        alt="Dark logo" 
                        width="175" 
                        height="136"                       
                    />
                </div>

                <div className="Navigation-wrapper" ref={this.container}>
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
                    {/* <FontAwesomeIcon icon={faBars} className="Bars" /> */}

                    <button type="button" className="NavBars" onClick={this.handleButtonClick}>
                        <FontAwesomeIcon icon={faBars} className="Bars" />
                    </button>
                    {this.state.open && (
                        <div className="dropdown">
                            {/* <ul>
                                <li>Option 1</li>
                                <li>Option 2</li>
                                <li>Option 3</li>
                                <li>Option 4</li>
                            </ul> */}
                            <ul>
                                <NavLink to="/">
                                    <li>Home <FontAwesomeIcon icon={faFeatherAlt} className="featherDropIcon" /></li>
                                </NavLink>
                                <NavLink to="/specialized-customizations">
                                    <li>Specialized Customizations <FontAwesomeIcon icon={faFeatherAlt} className="featherDropIcon" /></li>
                                </NavLink>
                                <NavLink to="/other-offers">
                                    <li>Additional Services <FontAwesomeIcon icon={faFeatherAlt} className="featherDropIcon" /></li>
                                </NavLink>
                                <NavLink to="/contact">
                                    <li>Contact <FontAwesomeIcon icon={faFeatherAlt} className="featherDropIcon" /></li>
                                </NavLink>
                            </ul>
                        </div>
                    )}

                    {/* <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            <FontAwesomeIcon icon={faBars} className="Bars" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <NavLink to="/" >Home</NavLink>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <NavLink to="/specialized-customizations" >Specialized Customizations</NavLink>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <NavLink to="/other-offers" >Additional Services</NavLink>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <NavLink to="/contact" >Contact</NavLink>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> */}
                </div>
            </div>
        )
    }
}

export default NavigationComponent