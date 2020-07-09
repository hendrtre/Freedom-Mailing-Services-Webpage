import React from 'react'
import { Component } from "react";
import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

export default class BlackAndWhite extends Component {
    render() {
        return (
            <div className="BWPage">
                <h1>Test: This is the BLack and White Page.</h1>
                <p>Hopefully this will work.</p>
                <NavLink to="/specialized-customizations">
                    <h3>
                        <FontAwesomeIcon icon={faArrowAltCircleLeft} className="leftArrow" />
                        Return
                    </h3>
                </NavLink>
            </div>
        )
    }
}