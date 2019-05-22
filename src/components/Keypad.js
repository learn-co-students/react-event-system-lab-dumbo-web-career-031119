// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component {

    enterPassword = () => {
        console.log("Entering password...", this)
    }

    render() {
        return (
            <div>
                <input type="password" onKeyUp={this.enterPassword} />
            </div>
        );
    }
}

export default Keypad;
