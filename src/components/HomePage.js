import React from "react";
import bg3 from "../assets/bg3.jpg";
import book_logo from "../assets/book_logo.jpg";
import { Container, Row, Col, Button, Image, Card } from "react-bootstrap";
import { card_data } from "../assets/assets";

const HomePage = () => {
  return (
    <>
      <Container fluid>
        <Row
          style={{
            height: "600px",
            //  width: "100%",
            backgroundImage: `url(${bg3})`,
            backgroundSize: "contain",
            // backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        >
          <Col
            md={12}
            style={{
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.803)",
              alignContent: "center",
            }}
          >
            <Row>
              <Col md={2}></Col>
              <Col md={8} style={{ textAlign: "center" }}>
                <h1 style={{ color: "blue" }}>Welcome To</h1>
                <h1>
                  <span style={{ color: "yellow" }}>MAHARAJA</span> AGARSEN
                  INSTITUTE
                </h1>
                <h3>of</h3>
                <h2>Management & Technology</h2>
                <h1
                  style={{
                    color: "aqua",
                    fontFamily: "monospace",
                    fontSize: "3.3rem",
                  }}
                >
                  Digital Library
                </h1>
              </Col>
              <Col md={2}></Col>
            </Row>
          </Col>
        </Row>
        <Row
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            margin: "20px 0",
          }}
        >
          <Col
            md={6}
            style={{ height: "350px", width: "500px", padding: "20px" }}
          >
            <Row>
              <h1>Purpose of Digital Library @ MAIMT</h1>
            </Row>
            <Row>
              <p>
                The institute currently runs MBA, MCA, BBA, BCA and BCA-CTIS
                (Cloud Technologies and Information Security), courses with
                intake of 120 students each and is known for the best placements
                in the region. The education pedagogy has been designed to
                create the professional who are not only top of the class
                technocrats and managers but also disciplined, constructive and
                responsible member of the society.
              </p>
            </Row>
            <Row>
              <Button variant="outline-success">Success</Button>{" "}
            </Row>
          </Col>
          <Col
            md={6}
            style={{
              height: "350px",
              width: "500px",
              backgroundImage: `url(${book_logo})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Col>
        </Row>
        <Row
          style={{ marginTop: "100px", backgroundColor: "rgb(44, 158, 67)" }}
        >
          <Col md={12}>
            <h1
              style={{
                color: "white",
                textAlign: "center",
                fontFamily: "cursive",
                padding:"20px"
              }}
            >
              E-Content
            </h1>
            {/* <div style={{ marginTop: "50px", marginBottom: "50px" }}> */}
            <Row style={{ padding: "20px 290px"}}>
              {card_data.map((value, index) => {
                return (
                  <Col md={4}>
                    <Card
                      style={{
                        width: "18rem",
                        textAlign: "center",
                        height: "20vh",
                        boxShadow: "5px 5px 15px rgba(255,255,255,0.5)",
                        backgroundColor: "rgb(44, 158, 67)",
                        position: "relative",
                        margin:"10px"
                      }}
                    >
                      <Image
                        src={value.logo}
                        style={{
                          position: "absolute",
                          width: "70px",
                          height: "70px",
                          marginLeft: "40%",
                          border: "5px solid blue",
                          borderRadius: "100%",
                        }}
                      />
                      <span
                        style={{
                          position: "absolute",
                          color: "white",
                          width: "100%",
                          top: "50%",
                        }}
                      >
                        {value.desc}
                      </span>
                    </Card>
                  </Col>
                );
              })}
            </Row>
            {/* </div> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
