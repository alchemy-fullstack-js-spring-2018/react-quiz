import React, { Component } from 'react';
import Task from './Task';

export default class Tasks extends Component {

  render() {
    const { tasks } = this.props;

    return (
      <div>
        Tasks
        <ul>
          { tasks.map((task, i) => (
            <Task key={i} task={task}/>
          ))}
        </ul>
      </div>
    );
  }
}