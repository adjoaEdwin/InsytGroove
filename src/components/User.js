import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const User = ({ name, email, id }) => {
  return (
    <div className="pt-5">
      <Card>
        <Card.Img variant="top" src={`https://robohash.org/${id}?200x200`} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{email}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to={{ pathname: `/users/${id}/posts`, state: { name } }}>
            View Posts
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default User;
