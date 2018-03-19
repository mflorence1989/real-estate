import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Mario'
    }
  }
  clickedBtn = () => {
    console.log('swag')
  }
  render () {
    return (<header>
      <div className="logo"> Logo </div>
      <nav>
      <a href="#"> create ads</a>
      <a href="#"> about us</a>
      <a href="#"> log in</a>
      <a href="#" className="register-btn">Register</a>
      </nav>
      </header>)
  }
}
