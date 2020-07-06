import axios from "../../axios/axios";
import * as actionTypes from "./actionTypes";

export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchPostsStart());
      const response = await axios.get("/posts");
      console.log(response.data);
      dispatch(fetchPostsSuccess(response.data));
    } catch (error) {
      console.log(error);
      dispatch(fetchPostsFail());
    }
  };
};

export const fetchPostsStart = () => {
  return {
    type: actionTypes.FETCH_POSTS_START,
  };
};

export const fetchPostsSuccess = (postsData) => {
  return {
    type: actionTypes.FETCH_POSTS_SUCCESS,
    payload: postsData,
  };
};

export const fetchPostsFail = () => {
  return {
    type: actionTypes.FETCH_POSTS_FAIL,
  };
};

export const selectPost = (postId, postsData) => {
  const selectedPostData = postsData.filter((post) => post.id === postId)[0];
  return {
    type: actionTypes.SELECT_POST,
    payload: selectedPostData,
  };
};
