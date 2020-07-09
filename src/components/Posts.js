import React from "react";

import Post from "./Post";
import { usePost } from "../providers/PostsProvider";

const Posts = (props) => {
  const posts = usePost();
  const { name } = props.location.state;

  return (
    <div>
      <h1 className="py-2">Posts By: {name}</h1>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default Posts;
