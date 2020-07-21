import React from 'react'
import { Component } from "react";
import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

import Victor from "../../../static/assets/SC-imgs/PostCards/City-of-Victor_2.jpg"
import Pinedale from "../../../static/assets/SC-imgs/PostCards/Pinedale-Gas_2.jpg"
import RiverH from "../../../static/assets/SC-imgs/PostCards/River-Heights_2.jpg"
import WhiteM from "../../../static/assets/SC-imgs/PostCards/White-Mountain_2.jpg"
import Winnemucca from "../../../static/assets/SC-imgs/PostCards/Winnemucca_2.jpg"

export default class PostCards extends Component {
    render() {
        return (
            <div className="PostCards">
                <h1>PostCards Samples.</h1>
                <p>"Here are some samples of what we can do with PostCards."</p>
                <NavLink to="/specialized-customizations">
                        <h3>
                            <FontAwesomeIcon icon={faArrowAltCircleLeft} className="leftArrow" />
                            Return to Main Page
                        </h3>
                </NavLink>
                <h2>City of Victor.</h2>
                <img src={Victor} alt="Victor"/>
                <h2>Pinedale.</h2>
                <img src={Pinedale} alt="Pinedale"/>
                <h2>River Heights.</h2>
                <img src={RiverH} alt="RiverH"/>
                <h2>White Mountain.</h2>
                <img src={WhiteM} alt="WhiteM"/>
                <h2>Winnemucca.</h2>
                <img src={Winnemucca} alt="Winnemucca"/>
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