import React from 'react'
import { Component } from "react";
import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

import Discovery from "../../../static/assets/SC-imgs/full color samples/Discovery-bay-page-001.jpg"
import Perry from "../../../static/assets/SC-imgs/full color samples/Perry-OK-page-001.jpg"
import Yucaipa from "../../../static/assets/SC-imgs/full color samples/Yucaipa-page-001.jpg"

export default class FullColor extends Component {
    render() {
        return (
            <div className="FullColor">
                <h1>Full Color Sample.</h1>
                <p>"Here are some samples of what we can do for a simple Full Color bill."</p>
                <NavLink to="/specialized-customizations">
                    <h3>
                        <FontAwesomeIcon icon={faArrowAltCircleLeft} className="leftArrow" />
                        Return to Main Page
                    </h3>
                </NavLink>
                <h2>Discovery Bay</h2>
                <img src={Discovery} alt="Discovery"/>
                <h2>Perry OK</h2>
                <img src={Perry} alt="Perry"/>
                <h2>Yucaipa</h2>
                <img src={Yucaipa} alt="Yucaipa"/>
                <NavLink to="/specialized-customizations">
                    <h3>
                        <FontAwesomeIcon icon={faArrowAltCircleLeft} className="leftArrow" />
                        Return to Main Page
                    </h3>
                </NavLink>
            </div>
        )
    }
}