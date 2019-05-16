// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {


    superFocus = () => {
        console.log('Good!')
    }

    superBlur = () => {
        console.log('Hey! Eyes on me!')
    }



    render(){
        return(
            <button onBlur={this.superBlur} onFocus={this.superFocus}>Click Me!</button>
        )

    }


}
