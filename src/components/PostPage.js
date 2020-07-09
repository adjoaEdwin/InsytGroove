import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { getPostById } from "../services/api";
import Post from "./Post";
import Comments from "./Comments";

const PostPage = (props) => {
  const { postId, userId } = props.match.params;

  const [post, setPost] = useState(null);
  const [comments, setComments] = useState(null);

  const getAUsersPostById = useCallback(async () => {
    const { data } = await getPostById(userId, postId);
    setPost(data[0]);
  }, [postId, userId]);

  const createComment = async (comment) => {
    const response = await axios.post(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
      {
        userId,
        ...comment,
      }
    );
    setComments(response.data);
  };

  useEffect(() => {
    getAUsersPostById();
  }, [getAUsersPostById]);

  return (
    <div className="py-2">
      {post && <Post {...post} />}
      <Comments comments={comments} onCreate={createComment} />
    </div>
  );
};

export default withRouter(PostPage);
