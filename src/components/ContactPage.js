import React, { useState } from "react";
import NavbarSection from "./NavbarSection";
import Footer from "./Footer";
import { Container, Row, Col, Button } from "react-bootstrap";

const ContactPage = () => {
  const [data, setdata] = useState({
    name: "",
    number: "",
    
    email: "",
    subject: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, seterror] = useState();
  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    if (
      data.name.length == 0 &&
      data.number.length == 0 &&
      data.email.length == 0 &&
      data.subject.length == 0
    ) {
      seterror("All fields are required");
      return;
    } else {
      setSuccess(true);
      seterror(null);
    }
  };
  const handleClear = () => {
    setdata({ name: "", number: "", email: "", subject: "" });
    setSuccess(false);
  };
  return (
    <>
      <Container>
        <Row style={{ padding: "20px" }}>
          <Col md={5} style={{ lineHeight: "30px" }}>
            <Row>
              <h1>Send Us a Message</h1>
            </Row>
            <Row>
              <label htmlFor="name">Your Name:</label>
            </Row>
            <Row>
              <input
                type="text"
                id="name"
                name="name"
                value={data.name}
                onChange={handleChange}
                placeholder="Your Name"
              />
            </Row>
            {error && (
              <Row style={{ color: "red", fontSize: "15px" }}>{error}</Row>
            )}

            <Row>
              <label htmlFor="number">Contact Number:</label>
            </Row>
            <Row>
              <input
                type="text"
                id="number"
                name="number"
                value={data.number}
                onChange={handleChange}
                placeholder="Your Number"
              />
            </Row>
            {error && (
              <Row style={{ color: "red", fontSize: "15px" }}>{error}</Row>
            )}
            <Row>
              <label htmlFor="email">Your Email:</label>
            </Row>
            <Row>
              <input
                type="email"
                id="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder="Your email"
              />
            </Row>
            {error && (
              <Row style={{ color: "red", fontSize: "15px" }}>{error}</Row>
            )}
            <Row>
              <label htmlFor="subject">Subject:</label>
            </Row>
            <Row>
              <input
                type="text"
                id="subject"
                name="subject"
                value={data.subject}
                onChange={handleChange}
                placeholder="Your Subject"
              />
            </Row>
            {error && (
              <Row style={{ color: "red", fontSize: "15px" }}>{error}</Row>
            )}
            <Row style={{ margin: "10px" }}>
              <Col>
                <Button variant="success" onClick={handleSubmit}>
                  Submit
                </Button>{" "}
              </Col>
              <Col>
                <Button variant="danger" onClick={handleClear}>
                  Clear
                </Button>{" "}
              </Col>
            </Row>
          </Col>
          <Col md={2}></Col>
          {success ? (
            <Col md={5} style={{ lineHeight: "30px" }}>
              <Row>
                <h1>Your Data</h1>
              </Row>
              <Row>Name: {data.name}</Row>
              <Row>Number: {data.number}</Row>
              <Row>Email: {data.email}</Row>
              <Row>Subject: {data.subject}</Row>
            </Col>
          ) : (
            ""
          )}
        </Row>
      </Container>
    </>
  );
};

export default ContactPage;
