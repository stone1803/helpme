import React, { Component } from "react";
import { connect } from "react-redux";
import { actionTip } from "../store/action/tipsAction";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import { Editor } from "@tinymce/tinymce-react";

class CreateTips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
    this.handleEditorChange = this.handleEditorChange.bind(this);
  }
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };
  handleEditorChange(content) {
    this.setState({ content });
  }
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.actionTip(this.state);
  };
  onContentStateChange = content => {
    this.setState({
      content
    });
  };
  onEditorStateChange = content => {
    this.setState({
      content
    });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="black-text grey-text"> CreateTips</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea type="text" id="content" onChange={this.handleChange} />
            <CKEditor
              typ
              id="content"
              editor={ClassicEditor}
              onChange={(event, editor) => {
          
                const data = editor.getData();
                // const dataHtml = editor.setData("sadas")
                console.log({ event, editor, data });
                this.setState({
                  content: data
                });
              }}
              onInit={editor => {
                // You can store the "editor" and use when it is needed.
                console.log("Editor is ready to use!", editor);
              }}
              // onBlur={(event, editor) => {
              //   console.log("Blur.", editor);
              // }}
              // onFocus={(event, editor) => {
              //   console.log("Focus.", editor);
              // }}
            />
            {/* <Editor onChange={this.handleChange} /> */}
            {/* 
            <Editor
              apiKey="jk9c3h3oj9ii5i1fjfgehqnmrscbu9nnydi2mnewmaiouyu3"
              value={this.state.content}
              onEditorChange={this.handleEditorChange}
              init={{ plugins: "link table" }}
            /> */}
          </div>
          {/* <div>
            <Editor
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={this.onEditorStateChange}
            />
            <textarea
              disabled
              value={
                content &&
                draftToMarkdown(convertToRaw(content.getCurrentContent()))
              }
            /> */}
          {/* </div> */}
          <div className="input-field">
            <button className="btn pink">ADD </button>
          </div>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    actionTip: data => dispatch(actionTip(data))
  };
};
export default connect(null, mapDispatchToProps)(CreateTips);
