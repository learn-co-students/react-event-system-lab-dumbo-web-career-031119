// Code Keypad Component Here
import React, { Component } from 'react';

class KeyPad extends React.Component {

passFunction = () => {
  console.log("Entering password...")
}

  render() {
    return (
      <div>
      <input onKeyUp={this.passFunction}type="password" />
      </div>
    );
  }

}

export default KeyPad;
