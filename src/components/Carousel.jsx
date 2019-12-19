import React, { Component } from 'react'

import Card from '../components/Card'

import meow from '../assets/images/meow.jpg'
import orange from '../assets/images/orange.jpeg'
import blue from '../assets/images/blue.jpeg'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export default class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 0,
          title: 'Facebook',
          subTitle: 'My Facebook Profile',
          imgSrc: meow,
          link: 'https://facebook.com/DoanQuocNgo',
          selected: false
          },
        {
          id: 1,
          title: 'Github',
          subTitle: 'My Github Profile',
          imgSrc: orange,
          link: 'https://github.com/DoanArsenal2905',
          selected: false
        },
        {
          id: 2,
          title: 'Trello',
          subTitle: 'My Trello Profile',
          imgSrc: blue,
          link: 'https://trello.com/doanarsenal',
          selected: false
        },
      ]
    }
  }

  handleCardClick = (id, card) => {

    let items = [...this.state.items]

    items[id].selected = items[id].selected ? false : true

    items.forEach(item => {
      if(item.id !== id) {
        item.selected = false
      }
    })

    this.setState({items})
  }

  makeItems = (items) => {
    return items.map(item => {
      return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
    })
  }

  render() {
    return(
      <Container fluid={true}>
        <Row className="justify-content-around">{this.makeItems(this.state.items)}</Row></Container>
    )
  }
}