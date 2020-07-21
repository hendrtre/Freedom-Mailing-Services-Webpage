import React from 'react'
import { Component } from "react";
import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

import CMC from "../../../static/assets/SC-imgs/Usage Graphs/1graph-CMC-page-001.jpg"
import Lehi from "../../../static/assets/SC-imgs/Usage Graphs/2graph-Lehi-page-001.jpg"
import Blanding from "../../../static/assets/SC-imgs/Usage Graphs/3graph-Blanding-page-001.jpg"

export default class UsageGraphs extends Component {
    render() {
        return (
            <div className="UsageGraphs">
                <h1>UsageGraphs Samples.</h1>
                <p>"Here are some samples of what we can do with 1, 2, and 3 Usage Graphs on the bill."</p>
                <NavLink to="/specialized-customizations">
                        <h3>
                            <FontAwesomeIcon icon={faArrowAltCircleLeft} className="leftArrow" />
                            Return to Main Page
                        </h3>
                </NavLink>
                <h2>Single Usage Graph, "CMC"</h2>
                <img src={CMC} alt="CMC"/>
                <h2>Double Usage Graph, "Lehi"</h2>
                <img src={Lehi} alt="Lehi"/>
                <h2>Triple Usage Graph, "Blanding"</h2>
                <img src={Blanding} alt="Blanding"/>
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