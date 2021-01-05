import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const Footer = () => {
  return (
    <Container as="div">
      <Row as="div">
        <Col className="text-center py-3">
          Copyright &copy; Rural E-commerce
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
