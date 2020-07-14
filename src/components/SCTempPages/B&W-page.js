import React from 'react'
import { Component } from "react";
import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

import EGMT from "../../../static/assets/SC-imgs/Black_white samples/Eagle-mtn-page-001.jpg"
import BattleM from "../../../static/assets/SC-imgs/Black_white samples/Battlement-Mesa-page-001.jpg"
import Monticello from "../../../static/assets/SC-imgs/Black_white samples/Monticello-page-001.jpg"
import Marinette from "../../../static/assets/SC-imgs/Black_white samples/Marinette-page-001.jpg"
import Thomasville from "../../../static/assets/SC-imgs/Black_white samples/Thomasville-page-001.jpg"

export default class BlackAndWhite extends Component {
    render() {
        return (
            <div className="BWPage">
                <h1>Black and White Samples.</h1>
                <p>"Here are some samples of what we can do for a simple Black and White bill."</p>
                <NavLink to="/specialized-customizations">
                        <h3>
                            <FontAwesomeIcon icon={faArrowAltCircleLeft} className="leftArrow" />
                            Return to Main Page
                        </h3>
                </NavLink>
                <h2>Eagle Mountain</h2>
                <img src={EGMT} alt="EGMT"/>
                <h2>Battle Mesa</h2>
                <img src={BattleM} alt="BattleM"/>
                <h2>Monticello</h2>
                <img src={Monticello} alt="Monticello"/>
                <h2>Marinette</h2>
                <img src={Marinette} alt="Marinette"/>
                <h2>Thomasville</h2>
                <img src={Thomasville} alt="Thomasville"/>
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