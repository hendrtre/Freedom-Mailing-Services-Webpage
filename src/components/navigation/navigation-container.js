import React from 'react'
import { NavLink } from 'react-router-dom'

const NavigationComponent = (props) => {
    return (
        <div className="Navigation-wrapper">
            <div className="nav-link-wrapper">
                <NavLink exact to="/" activeClassName="nav-link-active">
                    Home
                </NavLink>
            </div>
            <div className="nav-link-wrapper">
                <NavLink to="/specialized-customizations" activeClassName="nav-link-active">
                    Specialized Customizations 
                </NavLink>
            </div>
            <div className="nav-link-wrapper">
                <NavLink to="/other-offers" activeClassName="nav-link-active">
                    Other Offers
                </NavLink>
            </div>
            <div className="nav-link-wrapper">
                <NavLink to="/contact" activeClassName="nav-link-active">
                    Contact
                </NavLink>
            </div>
        </div>
    )
}

export default NavigationComponent