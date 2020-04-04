import React from 'react'

export default class NoteEditor extends React.Component {
    constructor() {
      super();
      this.state = {
        text: "",
        color: "#FFA726"
      };
    }
  
    handleTextChange = event => {
      this.setState({ text: event.target.value });
    };
  
    handleNoteAdd = () => {
      var newNote = {
        text: this.state.text,
        color: this.state.color,
        id: Date.now()
      };
  
      this.props.onNoteAdd(newNote);
      this.setState({ text: "" });
    };
  
    handleColorChange = event => {
      this.setState({ color: event.target.value });
    };
  
    render() {
      return (
        <div className="note-editor">
          <textarea
            placeholder="Enter your note here..."
            rows={5}
            className="textarea"
            value={this.state.text}
            onChange={this.handleTextChange}
          />
          <div className="color-picker" onChange={this.handleColorChange}>
            <input type="radio" name="color-pick" value="#F06292" id="color1" />
            <label
              htmlFor="color1"
              style={{ backgroundColor: "#F06292" }}
            ></label>
            <input type="radio" name="color-pick" value="#BA68C8" id="color2" />
            <label
              htmlFor="color2"
              style={{ backgroundColor: "#BA68C8" }}
            ></label>
            <input type="radio" name="color-pick" value="#FFD54F" id="color3" />
            <label
              htmlFor="color3"
              style={{ backgroundColor: "#FFD54F" }}
            ></label>
            <input type="radio" name="color-pick" value="#4FC3F7" id="color4" />
            <label
              htmlFor="color4"
              style={{ backgroundColor: "#4FC3F7" }}
            ></label>
            <input type="radio" name="color-pick" value="#AED581" id="color5" />
            <label
              htmlFor="color5"
              style={{ backgroundColor: "#AED581" }}
            ></label>
          </div>
          <button className="add-button" onClick={this.handleNoteAdd}>
            Add
          </button>
        </div>
      );
    }
  }
  