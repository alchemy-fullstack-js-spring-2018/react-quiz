import React, { Component } from 'react';
import Tasks from './Tasks';

export default class App extends Component {

  state = {
    tasks: [
      { 
        text: 'Learn React',
        level: 2
      },
      { 
        text: 'Learn Redux',
        level: 3
      },
      { 
        text: 'Creat Cool Project',
        level: 1
      }
    ]
  };

  handleRemove = index => {
    this.setState(({ tasks }) => {
      tasks.splice(index, 1);
      return tasks;
    });
  }

  render() {
    return (
      <Tasks tasks={this.state.tasks} onRemove={this.handleRemove}/>
    );
  }
}