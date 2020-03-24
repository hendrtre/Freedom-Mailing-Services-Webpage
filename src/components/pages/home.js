import React, { Component } from "react";
import axios from 'axios'

export default class Home extends Component {
  constructor() {
    super()

    this.getParagraphs = this.getParagraphs.bind(this)
  }  

  getParagraphs() {
    axios
      .get("http://localhost:5000/paragraphs")
      .then(response => {
        console.log("here it is!", response);
      })
      .catch(error => {
        console.log(error);
      });
  }


  render() {
    this.getParagraphs()
    return (
      <div className="content-page-wrapper">
        <h1>I am the Home Page</h1>
      </div>
    );
  }
}
