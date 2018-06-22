import React, { Component } from 'react';

export default class Task extends Component {

  render() {
    const { text, level } = this.props.task;
    const { handleRemove, taskIndex } = this.props;

    let difficulty = null;

    if(level === 1) {
      difficulty = 'easy';
    }

    if(level === 2) {
      difficulty = 'medium';
    }

    if(level === 3) {
      difficulty = 'hard';
    }

    return (
      <li>
        <p>
          Description: {text}
        </p>
        <p>
          Level: {difficulty}
        </p>
        <button onClick={() => handleRemove(taskIndex)}>Remove</button>
      </li>
    );
  }
}