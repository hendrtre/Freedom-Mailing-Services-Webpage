import React, { Component } from "react";
import axios from 'axios'

import HomeParaItems from "./home-para-items"

export default class Home extends Component {
  constructor() {
    super()

    this.state = {
      isLoading: false,
      data: []
    }

    this.getParagraphs = this.getParagraphs.bind(this)
  }  



  getParagraphs() {
    axios
      .get("http://localhost:5000/paragraphs")
      .then(response => {
        this.setState({
          data: response.data
        })
        
      })
      .catch(error => {
        console.log(error);
      });
  }

  paragraphs() {
    return this.state.data.map(item => {
      return <HomeParaItems content={item.content} slug={item.id} key={item.id} />
    })
  }

  componentDidMount() {
    this.getParagraphs()
  }


  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="content-page-wrapper">
        <h1>I am the Home Page</h1>
        <h2>
          {this.paragraphs()}
        </h2>
      </div>
    );
  }
}
