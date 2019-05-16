//use onFocus
import React, { Component } from 'react';

class EyesOnMe extends React.Component {

Focus = () => {console.log('Good!')}

Blur = () => {console.log('Hey! Eyes on me!')}


  render() {
    return(
      <button onFocus={this.Focus} onBlur={this.Blur}>
      </button>
    )
  }




}

export default EyesOnMe;
