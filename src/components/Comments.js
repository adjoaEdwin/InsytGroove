import React from "react";
import AddComment from "./AddComment";
import Comment from "./Comment";

const Comments = ({ comments, onCreate }) => {
  return (
    <div>
      <AddComment onCreate={onCreate} />
      {comments && <Comment {...comments} />}
    </div>
  );
};

export default Comments;
