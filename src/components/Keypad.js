// Code Keypad Component Here
import React,{Component} from 'react'

export default class Keypads extends Component{
  constructor(){
    super()
  }
  // handleKeyUp = () => console.log('Entering password')
  render(){
    return <input type="password" onKeyUp={()=>console.log('Entering password...')}/>
  }
}
