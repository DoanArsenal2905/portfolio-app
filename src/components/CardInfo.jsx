import React, { Component } from 'react'

import { animated } from 'react-spring'

export default class CardInfo extends Component {
  render() {
    return (
      <animated.div className="g-card-info">
        <p className="g-card-title">{this.props.title}</p>
        <p className="g-card-sub-title">{this.props.subTitle}</p>
        <a href={this.props.link} target="_blank" rel="noopener noreferrer">View</a>
      </animated.div>
    )
  }
}
