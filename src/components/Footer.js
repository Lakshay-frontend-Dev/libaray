import React from 'react'
import { Col, Container,Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <Container fluid>
      <Row
        style={{
          backgroundColor: "rgb(19, 18, 18)",
          color: "white",
          textAlign: "center",
          padding: "25px",
        }}
      >
        <Col md={2}>
          <h3>About MAIMT</h3>
          <p>
            MAIMT is a leading global manufacturing company specializing in
            advanced technology and innovation solutions.
          </p>
        </Col>
        <Col md={2}>
          <h4>Contact</h4>
          <p>Email: info@maimt.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </Col>

        <Col md={2}>
          <h4>Press</h4>
          <p>Press releases and media coverage</p>
        </Col>
        <Col md={2}>
          <h4>Terms & Conditions</h4>
          <p>View our terms and conditions</p>
        </Col>

        <Col md={2}>
          <h4>Privacy Policy</h4>
          <p>View our privacy policy</p>
        </Col>

        <Col md={2}>
          <h4>FAQs</h4>
          <p>Frequently asked questions</p>
        </Col>
      </Row>
      <Row
        style={{
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
          padding: "15px",
        }}
      >
        <h4>@ Copyright MAIMT 2024.</h4>
      </Row>
    </Container>
  );
}

export default Footer
