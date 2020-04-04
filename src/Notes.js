import React from "react";
import NoteEditor from "./NoteEditor";
import NotesGrid from "./NotesGrid";
import NoteSearch from "./NoteSearch";

export default class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      searchValue: "",
      filteredNotes: []
    };
  }
  componentDidMount() {
    var localNotes = JSON.parse(localStorage.getItem("notes"));
    if (localNotes) {
      this.setState({ notes: localNotes, filteredNotes: localNotes });
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    this._updateLocalStorage();
    if (this.state.searchValue !== "" && this.state.searchValue !== prevState.searchValue) {
      this.setState({
        filteredNotes: this.state.notes.filter(
          note =>
            note.text
              .toLowerCase()
              .indexOf(this.state.searchValue.toLowerCase()) !== -1
        )
      });
    } 
    else if(this.state.filteredNotes === this.state.notes){
        //do nothing  
    }
    else if (this.state.searchValue === ""){
      this.setState({
        filteredNotes: this.state.notes //this was trying to call unlimited times 
      });
    }
  }


  handleNoteDelete = note => {
    var noteId = note.id;
    var newNotes = this.state.notes.filter(function(note) {
      return note.id !== noteId;
    });
    this.setState({ notes: newNotes });
  };

  handleNoteAdd = newNote => {
    var newNotes = this.state.notes.slice();
    newNotes.unshift(newNote);
    this.setState({ notes: newNotes });
  };

  handleSearch = text => {
    this.setState({ searchValue: text });
  };

  render() {
    return (
      <div className="notes-app">
        <h2 className="app-header">NotesApp</h2>
        <NoteSearch onSearch={text => this.handleSearch(text)} />
        <NoteEditor onNoteAdd={this.handleNoteAdd} />
        <NotesGrid
          notes={this.state.filteredNotes} //this.state.filteredNotes
          onNoteDelete={this.handleNoteDelete}
        />
      </div>
    );
  }

  _updateLocalStorage = () => {
    var notes = JSON.stringify(this.state.notes);
    localStorage.setItem("notes", notes);
  };
}
