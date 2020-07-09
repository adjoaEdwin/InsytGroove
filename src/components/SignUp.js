import React from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";
import { signup } from "../services/api";

const SignUp = () => {
  let history = useHistory();

  const [error, setError] = React.useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    const { username, password } = e.target.elements;
    if (username.value === "esoko" && password.value === "insyt") {
      signup({ username: username.value, password: password.value });
      history.push("/users");
    } else if (username.value !== "esoko" && password.value !== "insyt") {
      setError(
        `Please complete all fields, use username: esoko and password: insyt`
      );
    } else {
      setError(
        `Please complete all fields, use username: esoko and password: insyt`
      );
    }
  };

  return (
    <div>
      {error && <Alert variant="danger">{error}</Alert>}
      <h3 className="text-center">Sign Up</h3>
      <Form className="signup-box px-3 py-3" onSubmit={(e) => handleSignUp(e)}>
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
    </div>
  );
};

export default SignUp;
