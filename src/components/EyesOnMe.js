// Code EyesOnMe Component Here
import React, {Component} from 'react';

export default class EyesOnMe extends Component {


	focussEvent = () => {
		console.log('Good!')
	}

	blurrEvent = () => {
		console.log('Hey! Eyes on me!')
	}

	render() {
		return (
			<button onFocus={this.focussEvent} onBlur={this.blurrEvent} />
		)
	}
}