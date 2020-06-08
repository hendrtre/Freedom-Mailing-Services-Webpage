import React, { Component } from "react";
import { Link } from "react-router-dom";
import RichTextEditor from '../RichTextEditor/rich-text-editor'
import axios from 'axios'


export default class Items extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      data: []
    }

    this.handleRichTextEditorChange = this.handleRichTextEditorChange.bind(this)
    this.handlePatchParagraphs = this. handlePatchParagraphs.bind(this)
  }  

  handleRichTextEditorChange(content) {
    this.setState({ content })
  }

  handlePatchParagraphs(event) {
    event.preventDefault()    
    console.log(this)
    // axios.patch("http://localhost:5000/paragraph/${1}", {
    // axios.patch("https://fms-test-tah.herokuapp.com/paragraph/${1}", {
    axios.patch("https://fms-test-tah.herokuapp.com/paragraph/${1}", {
      content: this.props.content
    }).then((response) => {
      console.log(response)
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      // <form onSubmit={this.handlePatchParagraphs()}>
      <form onSubmit={this.handlePatchParagraphs}>
        <div>
          <div>{this.props.content}</div>
          <RichTextEditor 
            contentToEdit={this.props.content} 
            editMode={this.props.editMode}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

// import React from "react";
// import { Link } from "react-router-dom";
// import RichTextEditor from '../RichTextEditor/rich-text-editor'

// export default function(props) {
//   return (
//     <div>
//       <div>{props.content}</div>
//       <RichTextEditor contentToEdit={props.content}  />
//     </div>
//   );
// }