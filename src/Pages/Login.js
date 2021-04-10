import React from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div
      style={{
        width: "500px",
        marginLeft: "20%",
        marginTop: "100px",
        boxShadow: "2px 8px 20px #ddd",
        padding: "20px",
        borderRadius: "10px",
      }}>
      <Form>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="email" placeholder="Email" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Login</Button>
          </Col>
        </Form.Group>
      </Form>
      <Link to="/signup">Signup now!</Link>
    </div>
  );
}
