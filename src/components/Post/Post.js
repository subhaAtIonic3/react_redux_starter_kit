import React from "react";

import classes from "./Post.module.css";

const Post = ({ title, body, userId }) => {
  return (
    <div className={classes.Post}>
      <h3>{title}</h3>
      <p>{body}</p>
      <p>{userId}</p>
    </div>
  );
};

export default Post;
