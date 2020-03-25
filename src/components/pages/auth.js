import React, { Component } from "react"
import disneyCastle from "../../../static/assets/main-imgs/DisneyCastle.jpg"

export default class Auth extends Component {
    render() {
        return (
            <div className="auth-page-wrapper">
                <div 
                    className="left-column" 
                    style={{
                        background: "url(" + disneyCastle + ") no-repeat",
                        height: "100vh",
                        width: "512px"
                    }}
                />
                <div className="right-column">
                    <h1>Login component going here....</h1>
                </div>
            </div>
        )
    }
}