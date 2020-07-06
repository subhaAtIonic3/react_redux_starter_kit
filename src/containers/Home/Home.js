import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions";
import Post from "../../components/Post/Post";
import classes from "./Home.module.css";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const posts = this.props.posts.map(({ title, body, id, userId }) => {
      return (
        <div key={id} className={classes.PostContainer}>
          <Post title={title} userId={userId} body={body} />
        </div>
      );
    });

    return <div>{this.props.loading ? <p>Loading...</p> : posts}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.posts.loading,
    posts: state.posts.posts,
    error: state.posts.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(actions.fetchPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
