import React from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Col, Row } from "react-bootstrap";
import SignUp from "./SignUp";
import { handleLogin } from "../services/api";

const SignIn = () => {
  let history = useHistory();

  const handleSignIn = async (e) => {
    e.preventDefault();
    const { username, password } = e.target.elements;
    try {
      handleLogin({ username: username.value, password: password.value });
      history.push("/users");
    } catch (error) {
      console.error("Error creating user", error);
    }
  };
  return (
    <Row>
      <Col md={5}>
        <h3 className="text-center">Sign In </h3>
        <Form
          className="signup-box px-3 py-3"
          onSubmit={(e) => handleSignIn(e)}
        >
          <Form.Group controlId="username">
            <Form.Control type="text" placeholder="Enter username" />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit" block>
            Submit
          </Button>
        </Form>
      </Col>
      <Col className="text-center text-red">
        <span>OR</span>
      </Col>
      <Col md={5}>
        <SignUp />
      </Col>
    </Row>
  );
};

export default SignIn;
