import React, { Component } from 'react'
import { EditorState, convertToRaw, ContentState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html'
import htmlToDraft from 'html-to-draftjs'

export default class RichTextEditor extends Component {
    constructor(props) {
        super(props)

        this.state = {
            editorState: EditorState.createEmpty()
        }
        
        this.onEditorStateChange = this.onEditorStateChange.bind(this)
    }

    componentWillMount() {
        console.log(this.props.contentToEdit)
        if ( this.props.contentToEdit) {
            const blocksFromHtml = htmlToDraft(this.props.contentToEdit);
            const { contentBlocks, entityMap } = blocksFromHtml;
            const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
            const editorState = EditorState.createWithContent(contentState);
            this.setState({ editorState });
        }
    }

    onEditorStateChange(editorState) {
        this.setState(
            { editorState }
            // this.props.handleRichTextEditorChange(
            //     draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
            // )
        )
    }

    render() {
        return (
            <div>
                <Editor 
                    // onChange={this.state.onEditorStateChange}
                    editorState={this.state.editorState}
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={this.onEditorStateChange}
                    toolbarClassName="toolbarClassName"
                    toolbar={{
                        inline: { inDropdown: true },
                        list: { inDropdown: true },
                        textAlign: { inDropdown: true },
                        link: { inDropdown: true },
                        history: { inDropdown: true },
                        // image: {
                        //   uploadCallback: this.uploadFile,
                        //   alt: { present: true, mandatory: false },
                        //   previewImage: true,
                        //   inputAccept: "image/gif,image/jpeg,image/jpg,image/png,image/svg"
                        // }
                    }}
                />
            </div>
        )
    }
}
