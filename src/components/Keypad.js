import React, { Component } from 'react';

export default class Keypad extends Component {
  handleEvent = (event) => {
    console.log('Entering password...');
  }

  render() {
    return(
      <div>
      <input onKeyUp = {this.handleEvent} type = "password" />
      </div>
    )
  }
};
