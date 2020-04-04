import React from 'react';

export default class Note extends React.Component {
    render() {
      var style = { backgroundColor: this.props.color };
      return (
        <div className="note" style={style}>
          <span className="delete-note" onClick={this.props.onDelete}>
            {" "}
            ×{" "}
          </span>
          {this.props.children}
        </div>
      );
    }
  }