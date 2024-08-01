import React from "react";
import NavbarSection from "./NavbarSection";
import Footer from "./Footer";
import { Container, Row, Col } from "react-bootstrap";
import book from "../assets/paper.jpg";
import { Link } from "react-router-dom";

const PaperPage = () => {
  return (
    <>
      {/* <NavbarSection /> */}
      <Container
        style={{
          backgroundImage: `url(${book})`,
          //   height: "500px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          fontSize: "3rem",
          fontWeight: "bolder",
          padding: "20px 90px",
        }}
        fluid
      >
        <Row>
          <Col md={3}></Col>
          <Col
            md={3}
            style={{
              height: "200px",
              backgroundColor: "rgba(135, 207, 235, 0.838)",
              display: "grid",
              placeItems: "center",
              width: "290px",
              border: "2px solid blue",
              borderRadius: "30px",
              margin: "20px",
            }}
          >
            <Link to={"/semester"}>BCA</Link>
          </Col>
          <Col
            md={3}
            style={{
              height: "200px",
              backgroundColor: "rgba(135, 207, 235, 0.838)",
              display: "grid",
              placeItems: "center",
              width: "290px",
              border: "2px solid blue",
              borderRadius: "30px",
              margin: "20px",
            }}
          >
            <Link to={"/semester"}>BBA</Link>
          </Col>
          <Col md={3}></Col>
        </Row>
        <Row>
          <Col md={3}></Col>
          <Col
            md={3}
            style={{
              height: "200px",
              backgroundColor: "rgba(135, 207, 235, 0.838)",
              display: "grid",
              placeItems: "center",
              width: "290px",
              border: "2px solid blue",
              borderRadius: "30px",
              margin: "20px",
            }}
          >
            <Link to={"/semester"}>MCA</Link>
          </Col>
          <Col
            md={3}
            style={{
              height: "200px",
              backgroundColor: "rgba(135, 207, 235, 0.838)",
              display: "grid",
              placeItems: "center",
              width: "290px",
              border: "2px solid blue",
              borderRadius: "30px",
              margin: "20px",
            }}
          >
            <Link to={"/semester"}>MBA</Link>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
      {/* <Footer /> */}
    </>
  );
};

export default PaperPage;
