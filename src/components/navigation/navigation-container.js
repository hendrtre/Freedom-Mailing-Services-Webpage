import React from 'react'
import { NavLink } from 'react-router-dom'
import BlackLogo from '../../../static/assets/main-imgs/BlackLogo.jpg'

const NavigationComponent = (props) => {
    return (
        <div className="Navigation-wrapper">
            <div className="left-side">
                <img src={BlackLogo} alt="Dark logo" width="100" height="100" />
            </div>
            <div className="right-side">
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
        </div>
    )
}

export default NavigationComponent