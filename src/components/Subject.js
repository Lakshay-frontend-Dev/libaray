import React from "react";
import { Container, Table } from "react-bootstrap";

const Subject = () => {
  return (
    <Container>
      <Table style={{ margin: "20px" }} striped bordered hover>
        <thead>
          <tr
            style={{
              textAlign: "center",
              fontSize: "2rem",
            }}
          >
            <th
              style={{
                backgroundColor: "blue",
                color: "white",
              }}
            >
              Subject
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span style={{ fontWeight: "bolder" }}>B23-CAP-CTS-201 </span>
              Object Oriented Programing Using C++
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ fontWeight: "bolder" }}>B23-CAP-CTS-202 </span>
              Introduction to Web Technology
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ fontWeight: "bolder" }}>B23-CAP-CTS-203 </span>
              Concept of Operating System
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ fontWeight: "bolder" }}>B23-CAP-CTS-204 </span>
              Mathematical Foundation
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ fontWeight: "bolder" }}>B23-AFC-F-201 </span>
              English Language and Communication
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ fontWeight: "bolder" }}>B23-BBA-MDC-204 </span>
              Entrepreunship & Start-ups
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ fontWeight: "bolder" }}>B23-SFC-207 </span>
              Soft-Skills
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ fontWeight: "bolder" }}>B23-VAC-201 </span>
              Environmental Studies
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Subject;
