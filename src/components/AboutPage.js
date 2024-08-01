import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import bg2 from "../assets/bg2.jpg";

const AboutPage = () => {
  return (
    <>
      <Container fluid>
        <Row
          style={{
            height: "500px",
            backgroundImage: `url(${bg2})`,
            backgroundSize: "covrer",
            backgroundRepeat: "no-repeat",
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
              <Col md={8}>
                <h1> Who We Are MAIMT</h1>
                <p>
                  of district Yamuna Nagar, as a result of vision of Maharaja
                  Agrasen Sabha. MAIMT is affiliated to Kurukshetra University
                  and approved by AICTE. was established in 1997 as first
                  Management Institute
                </p>
                <h1>What We Do</h1>
                <p>
                  The institute currently runs MBA, MCA, BBA, BCA and BCA-CTIS
                  (Cloud Technologies and Information Security), courses with
                  intake of 120 students each and is known for the best
                  placements in the region. The education pedagogy has been
                  designed to create the professional who are not only top of
                  the class technocrats and managers but also disciplined,
                  constructive and responsible member of the society. The
                  institute currently runs MBA, MCA, BBA, BCA and BCA-CTIS
                  (Cloud Technologies and Information Security), courses with
                  intake of 120 students each and is known for the best
                  placements in the region. The education pedagogy has been
                  designed to create the professional who are not only top of
                  the class technocrats and managers but also disciplined,
                  constructive and responsible member of the society.
                </p>
              </Col>
              <Col md={2}></Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col style={{ padding: "20px 70px" }}>
            <h1 style={{ fontWeight: "bolder" }}>WHY MAIMT</h1>
          </Col>
        </Row>
        <Row
          style={{
            color: "white",
            display: "flex",
            justifyContent: "spaceBetween",
            marginBottom: "30px",
            padding:"0 70px"
          }}
        >
          <Col md={3}>
            <Card
              style={{
                width: "20rem",
                backgroundColor: "#334D6C",
                color: "white",
              }}
            >
              <Card.Body>
                <Card.Title>100%</Card.Title>
                <Card.Text>
                  Placement MAIMT is the only college which has placed each and
                  every student in a reputed company in the core fields of
                  Software Engineering, Human Resource.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card
              style={{
                width: "20rem",
                backgroundColor: "#334D6C",
                color: "white",
              }}
            >
              <Card.Body>
                <Card.Title>Earn While Learn</Card.Title>
                <Card.Text>
                  MAIMT provides the students to earn stipend through internship
                  and consultancy, most of the final year students pay their fee
                  through same Finance and Accounting and Marketing
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card
              style={{
                width: "20rem",
                backgroundColor: "#334D6C",
                color: "white",
              }}
            >
              <Card.Body>
                <Card.Title>Live Projects</Card.Title>
                <Card.Text>
                  Free specialized trainings are provided to the students during
                  summer and winter same Finance and Accounting and Marketing
                  break and students develop mandatory live project 
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card
              style={{
                width: "20rem",
                backgroundColor: "#334D6C",
                color: "white",
              }}
            >
              <Card.Body>
                <Card.Title>Entrepreneurship Development</Card.Title>
                <Card.Text>
                  MAIMT has a dedicated ED cell which helps students in
                  developing the entrepreneurial skills and help them through
                  seed funding as well communication skills
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutPage;
