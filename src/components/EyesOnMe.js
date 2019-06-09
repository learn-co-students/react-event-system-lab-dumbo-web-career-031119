import React, { Component } from 'react';

export default class EyesOnMe extends Component {

  onFocus = () => console.log("Good!")
  onBlur = () => console.log('Hey! Eyes on me!')
  render() {
    return(
      <div>
      <button onFocus ={this.onFocus} onBlur = {this.onBlur} type="button">Eye's on me!</button>
      </div>
    )
  }
}
