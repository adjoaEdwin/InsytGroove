import React from "react";
import { getUser } from "../services/api";

const Comment = ({ title, body }) => {
  return (
    <div className="border-blue mb-5">
      <div className="p-2">
        <h5 className="text-capitalize">{title}</h5>
        <p className="text-capitalize">{body}</p>
      </div>
      <div className="mt-1 d-flex justify-content-between bg-yellow p-2">
        <span role="img" aria-label="favorites">
          Comment By: {getUser().name}
        </span>
      </div>
    </div>
  );
};

export default Comment;
