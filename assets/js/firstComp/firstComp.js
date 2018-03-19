import React, { Component} from 'react'
import ReactDOM from 'react-dom'

class Layout extends Component {
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

  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
