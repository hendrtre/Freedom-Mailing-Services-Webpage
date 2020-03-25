import React, { Component } from 'react'

export default class login extends Component {
    render() {
        return (
            <div>
                <h1>LOGIN TO ACCESS YOUR DASHBOARD</h1>

                <form>
                    <input type="text"/>
                    <input type="password"/>
                </form>
            </div>
        )
    }
}