import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class Content extends Component {
  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-center">
          <Col md={8}>{this.props.children}</Col>
        </Row>
      </Container>
    )
  } 
}
