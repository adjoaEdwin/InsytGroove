import React from "react";
import { Button } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

const Post = ({ title, body, id, userId }) => {
  return (
    <div className="border-blue mb-5">
      <div className="p-2">
        <Link to={`/users/${userId}/posts/${id}`}>
          <h5 className="text-capitalize">{title}</h5>
        </Link>
        <p className="text-capitalize">{body}</p>
      </div>
      <div className="mt-1 d-flex justify-content-between bg-yellow p-2">
        <span role="img" aria-label="favorites">
          ⭐
        </span>
        <div>
          <Button
            href={`/users/${userId}/posts/${id}`}
            variant="info"
            className="mr-1"
          >
            Add comment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Post);
