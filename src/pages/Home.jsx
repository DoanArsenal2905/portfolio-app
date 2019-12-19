import React, { Component } from 'react'

import Info from '../components/Info'
import Carousel from '../components/Carousel'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Info title={this.props.title} subTitle={this.props.subTitle} text={this.props.text} />
        <Carousel />
      </div>
    )
  }
}
