import React from 'react'
import { Component } from "react";
import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

import BonaVista from "../../../static/assets/SC-imgs/2 color samples/Bonavista-001.jpg"
import Gorgoza from "../../../static/assets/SC-imgs/2 color samples/Gorgoza-page-001.jpg"
import Ivins from "../../../static/assets/SC-imgs/2 color samples/Ivins-page-001.jpg"
import Grantsville from "../../../static/assets/SC-imgs/2 color samples/Grantsville-page-001.jpg"

export default class TwoColor extends Component {
    render() {
        return (
            <div className="twoColor">
                <h1>Two Color Samples.</h1>
                <p>"Here are some samples of what we can do for a simple Two Color bill."</p>
                <NavLink to="/specialized-customizations">
                    <h3>
                        <FontAwesomeIcon icon={faArrowAltCircleLeft} className="leftArrow" />
                        Return to Main Page
                    </h3>
                </NavLink>
                <h2>BonaVista</h2>
                <img src={BonaVista} alt="BonaVista"/>
                <h2>Gorgoza</h2>
                <img src={Gorgoza} alt="Gorgoza"/>
                <h2>Ivins</h2>
                <img src={Ivins} alt="Ivins"/>
                <h2>Grantsville</h2>
                <img src={Grantsville} alt="Grantsville"/>
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