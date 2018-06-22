import React, { Component } from 'react';
import Task from './Task';

export default class Tasks extends Component {

  render() {
    const { tasks, onRemove } = this.props;

    return (
      <div>
        Tasks
        <ul>
          { tasks.map((task, i) => (
            <Task key={i} task={task} taskIndex={i} handleRemove={onRemove}/>
          ))}
        </ul>
      </div>
    );
  }
}