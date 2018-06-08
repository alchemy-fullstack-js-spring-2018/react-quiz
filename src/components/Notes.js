import React, { Component } from 'react';
import Note from './Note';

export default class Notes extends Component {

  render() {
    const { note } = this.props;

    return (
      <ul>
        {note.map((note, i) => (
          <Note key={i} note={note}/>
        ))}
      </ul>
    );
  }
}