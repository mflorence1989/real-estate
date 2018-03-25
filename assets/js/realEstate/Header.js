import React, { Component} from 'react'


export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Mario'
    }
  }

  render () {
    return (<header>
      <div className="logo"> Real Estate </div>
      <nav>
      <a href="#">Realtors</a>
      <a href="#">About us</a>
      <a href="#">Log in</a>
      <a href="#" className="register-btn">Register</a>
      </nav>
      </header>)
  }
}
