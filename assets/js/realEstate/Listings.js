import React, { Component} from 'react'


export default class Listings extends Component {
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
    return (<section className="listings">
      Listings
      </section>)
  }
}
