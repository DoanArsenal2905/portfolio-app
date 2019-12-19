import React, { Component } from 'react'

import Info from '../components/Info';
import Content from '../components/Content';

export default class About extends Component {
  render() {
    return (
      <div>
        <Info title={this.props.title} />
        <Content>
          <p>Hello, my name is Ngo Quoc Doan. I'm a full-stack developer with experience in Express JS, Node JS, Vue, React, MongoDB and Docker .</p>

          <p>My dream is to one day start my own business and become an entrepreneur (currently working on some ideas).</p>

          <p>I'm constantly learning new things. currently those things include gaining more experience with PostgreSQL, React and Elixir.</p>

          <p>Thank you very much!</p>
        </Content>
      </div>
    )
  }
}
