import React, { Component} from 'react'


export default class Filter extends Component {
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
    return (<section className="filter">
    Filter
  </section>  )
  }
}
