import Masonry from "masonry-layout";

import React from "react";
import Note from "./Note";
export default class NotesGrid extends React.Component {
  constructor(props) {
    super(props);
    this.gridRef = React.createRef();
  }

  componentDidMount() {
    // var grid = this.refs.grid;
    this.msnry = new Masonry(this.gridRef.current, {
      itemSelector: ".note",
      columnWidth: 200,
      gutter: 10,
      isFitWidth: true,
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.notes.length !== prevProps.notes.length) {
      this.msnry.reloadItems();
      this.msnry.layout();
    }
  }

  render() {
    var onNoteDelete = this.props.onNoteDelete;

    return (
      <div className="notes-grid" ref={this.gridRef}>
        {this.props.notes.map(function (note) {
          return (
            <Note
              key={note.id}
              onDelete={onNoteDelete.bind(null, note)}
              color={note.color}
            >
              {note.text}
            </Note>
          );
        })}
      </div>
    );
  }
}
