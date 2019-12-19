import React, { Component } from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class Info extends Component {
  render() {
    return (
      <Jumbotron className="bg-transparent jumbotron-fluid p-0">
        <Container fluid={true}>
          <Row className="justify-content-center py-5">
            <Col md={8} sm={12}>
              { this.props.title && <h1 className="display-1 font-weight-bolder">{this.props.title}</h1> }
              { this.props.subTitle && <h3 className="display-4 font-weight-light">{this.props.subTitle}</h3> }
              { this.props.text && <h3 className="lead font-weight-light">{this.props.text}</h3> }
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    )
  }
}
