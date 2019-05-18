// Code EyesOnMe Component Here
import React, { Component } from 'react';

class EyesOnMe extends React.Component {

  focusFunc= () => {
    console.log('Good!')
  }

  blurFunction= () => {
      console.log("Hey! Eyes on me!")
  }

  render() {
    return (
      <button onFocus={this.focusFunc} onBlur={this.blurFunction}></button>
    );
  }

}

export default EyesOnMe;
