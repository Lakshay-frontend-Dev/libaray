import React from "react";
import { Container, Col, Row, Image, Nav, Navbar } from "react-bootstrap";
import maimt2 from "../assets/maimt2.png";
import { IoCall } from "react-icons/io5";
import { IoIosArrowDropupCircle } from "react-icons/io";
import {Link} from "react-router-dom"

const NavbarSection = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={3}></Col>
        <Col
          md={9}
          style={{
            backgroundColor: "black",
            height: "28px",
            borderBottomLeftRadius: "50%",
            borderTopLeftRadius: "50%",
          }}
        ></Col>
      </Row>
      <Row
        style={{
          alignItems: "center",
          padding: "10px",
          borderBottom: "2px solid",
          // boxShadow:"5px 5px 10px white"
        }}
      >
        <Col md={6}>
          <Image
            style={{ paddingLeft: "143px" }}
            height="70px"
            src={maimt2}
          ></Image>
        </Col>
        <Col style={{ fontSize: "1.2rem" }} md={3}>
          <IoCall style={{ fontSize: "1.8rem", margin: "4px" }} />
          7015698733
        </Col>
        <Col style={{ fontSize: "1.2rem" }} md={3}>
          <IoIosArrowDropupCircle
            style={{ fontSize: "1.8rem", margin: "4px" }}
          />
          director@maimt.com
        </Col>
      </Row>
      <Row>
        <Navbar
          bg="primary"
          data-bs-theme="dark"
          style={{ boxShadow: "5px 5px 10px grey" }}
        >
          <Container>
            <Navbar.Brand as={Link} to={"/"}>
              Home
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/about"}>
                About
              </Nav.Link>
              <Nav.Link as={Link} to={"/contact"}>
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to={"/paper"}>
                Paper
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </Row>
    </Container>
  );
};

export default NavbarSection;
