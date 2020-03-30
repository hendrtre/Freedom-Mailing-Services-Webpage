import React, { Component } from 'react'
import axios from "axios"

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            errorText: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            errorText: ""
        })
    }

    handleSubmit(event) {
        // console.log("Handle submit", this.state.email, this.state.password)
        // event.preventDefault()
        axios.post("http://127.0.0.1:5000/api/v1/login",
            {
                email: this.state.email,
                password: this.state.password
            }
      ).then(response => {
          if (response.data === "Password Authenticated") {
              this.props.handleSuccessfulAuth()
          } else {
              this.setState({
                  errorText: "Wrong email or password"
              })
              this.props.handleUnsuccessfulAuth()
          }
          console.log("response", response);
      }).catch(error => {
          console.log("some error occured", error)
          this.setState({
              errorText: "ERROR, Unable to connect with Database"
          })
          this.props.handleUnsuccessfulAuth()
      })

    event.preventDefault()
    }

    render() {
        return (
            <div>
                <h1>LOGIN TO ACCESS YOUR DASHBOARD</h1>

                <div>{this.state.errorText}</div>

                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />

                    <input 
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />

                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>            
        )
    }
}