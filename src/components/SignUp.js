import React from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { signup } from "../services/api";

const SignUp = () => {
  let history = useHistory();
  const handleSignUp = async (e) => {
    e.preventDefault();
    const { username, password } = e.target.elements;

    try {
      signup({ username: username.value, password: password.value });
      history.push("/users");
    } catch (error) {
      console.error("Error creating user", error);
    }
  };

  return (
    <div>
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
