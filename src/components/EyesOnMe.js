// Code EyesOnMe Component Here

import React, { Component } from 'react'

export default class EyesOnMe extends Component {
    static propTypes = {

    }

    focusGood = () => {
	console.log('Good!')
    }

    blurHay = () => {
	console.log('Hey! Eyes on me!')
    }

    render() {
        return (
            <div>
		<button onFocus={this.focusGood} onBlur={this.blurHay} ></button>
            </div>
        )
    }
}
