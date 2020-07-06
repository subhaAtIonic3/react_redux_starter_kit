import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./Details.module.css";
import Post from "../../components/Post/Post";

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { userId, title, body } = this.props.post;

    return (
      <div className={classes.Details}>
        <Post
          showDetailsButton={false}
          userId={userId}
          title={title}
          body={body}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.posts.selectedPost,
  };
};

export default connect(mapStateToProps, null)(Details);
