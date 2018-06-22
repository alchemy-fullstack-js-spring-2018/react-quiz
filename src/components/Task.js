import React, { Component } from 'react';

export default class Task extends Component {
  
  render() {
    const { text, level } = this.props;

    return (
      <li>
        Description: {text}
        Level: {level}
      </li>
    );
  }
}