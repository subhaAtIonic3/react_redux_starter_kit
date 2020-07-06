import React from "react";

import classes from "./Post.module.css";

const Post = ({ title, body, userId, goToDetails, showDetailsButton }) => {
  return (
    <div className={classes.Post}>
      <h3 className={classes.PostTitle}>{title}</h3>
      <p className={classes.PostBody}>{body}</p>
      <p>{userId}</p>
      {showDetailsButton ? (
        <button className={classes.DetailsButton} onClick={goToDetails}>
          Details
        </button>
      ) : null}
    </div>
  );
};

export default Post;
