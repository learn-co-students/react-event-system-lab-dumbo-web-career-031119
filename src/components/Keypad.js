// Code Keypad Component Here
import React, { Component } from 'react'

export default class Keypad extends Component {
    static propTypes = {

    }

    tickle = (e) => {
	console.log('Entering password...');
    }

    render() {
        return (
            <div>
		<input onKeyUp={this.tickle} type='password'></input>
            </div>
        )
    }
}


