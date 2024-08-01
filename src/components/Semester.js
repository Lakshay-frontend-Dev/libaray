import React from "react";
import NavbarSection from "./NavbarSection";
import Footer from "./Footer";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Semester = () => {
  const semesterRow1 = [
    {
      sem: "SEMESTER I",
    },
    {
      sem: "SEMESTER II",
    },
    {
      sem: "SEMESTER III",
    },
  ];
  const semesterRow2 = [
    {
      sem: "SEMESTER IV",
    },
    {
      sem: "SEMESTER V",
    },
    {
      sem: "SEMESTER VI",
    },
  ];
  return (
    <>
      <Container
        style={{ padding: "60px 40px", fontSize: "1.5rem", fontWeight: "bold" }}
      >
        <Row>
          {semesterRow1.map((value, index) => {
            return (
              <Col
                style={{
                  backgroundColor: "rgba(135, 207, 235, 0.838)",
                  display: "grid",
                  placeItems: "center",
                  margin: "10px",
                  // borderRadius: "3000px",
                  borderTopLeftRadius: "500px",
                  borderTopRightRadius: "500px",
                  borderBottomLeftRadius: "500px",
                  borderBottomRightRadius: "500px",
                  width: "400px",
                  height: "100px",
                  boxShadow: "5px 5px 15px red",
                  color: "black",
                  textDecoration: "none",
                }}
                md={4}
              >
                <Link to="/subject">{value.sem}</Link>
              </Col>
            );
          })}
        </Row>
        <Row>
          {semesterRow2.map((value, index) => {
            return (
              <Col
                style={{
                  backgroundColor: "rgba(135, 207, 235, 0.838)",
                  display: "grid",
                  placeItems: "center",
                  margin: "10px",
                  borderRadius: "30px",
                  width: "400px",
                  height: "100px",
                  boxShadow: "5px 5px 15px red",
                }}
                md={4}
              >
                <Link
                  style={{ color: "blue", textDecoration: "none" }}
                  to="/subject"
                >
                  {value.sem}
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Semester;
