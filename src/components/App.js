import React, { Component } from 'react';
import Notes from './Notes';

export default class App extends Component {

  state = {
    notes: [
      { 
        date: new Date('2/12/2018'),
        text: 'Learn React'
      },
      { 
        date: new Date('2/27/2018'),
        text: 'Learn Redux'
      },
      { 
        date: new Date('3/23/2018'),
        text: 'Creat Cool Project'
      }
    ]
  };

  render() {
    const { note } = this.state;

    return (
      <div>
        Quiz
        <Notes note={note}/>
      </div>
    );
  }
}