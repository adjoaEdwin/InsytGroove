import React from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Col, Row, Alert } from "react-bootstrap";
import SignUp from "./SignUp";
import { handleLogin } from "../services/api";

const SignIn = () => {
  let history = useHistory();

  const [error, setError] = React.useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    const { username, password } = e.target.elements;
    if (username.value === "esoko" && password.value === "insyt") {
      handleLogin({ username: username.value, password: password.value });
      history.push("/users");
    } else {
      setError(`Invalid login credentials, please try again`);
    }
  };
  return (
    <Row className="signup">
      <Col md={5}>
        {error && <Alert variant="danger">{error}</Alert>}

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
