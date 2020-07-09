import React from "react";
import { Form, Button } from "react-bootstrap";

const AddComment = (props) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    let { title, body } = e.target.elements;
    props.onCreate({ title: title.value, body: body.value });
  };

  return (
    <div className="p-2">
      <Form className="mb-3" onSubmit={(e) => handleSubmit(e)}>
        <Form.Group controlId="formHorizontalEmail">
          <Form.Control type="text" placeholder="Title" name="title" />
        </Form.Group>

        <Form.Group controlId="formHorizontalPassword">
          <Form.Control type="text" placeholder="body" name="body" />
        </Form.Group>

        <Form.Group>
          <Button type="submit" block>
            Add comment
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default AddComment;
