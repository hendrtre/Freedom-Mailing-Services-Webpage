import React, { Component } from "react"
import Login from "./login"
import disneyCastle from "../../../static/assets/main-imgs/DisneyCastle.jpg"

export default class Auth extends Component {
    constructor(props) {
        super(props)

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this)
        this.handleUnsuccessfulAuth = this.handleUnsuccessfulAuth.bind(this)
    }

    handleSuccessfulAuth() {
        this.props.handleSuccessfulLogin()
        this.props.history.push("/")
    }

    handleUnsuccessfulAuth() {
        this.props.handleUnsuccessfulLogin()
    }

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
                    <Login 
                        handleSuccessfulAuth={this.handleSuccessfulAuth}
                        handleUnsuccessfulAuth={this.handleUnsuccessfulAuth}
                    />
                </div>
            </div>
        )
    }
}