import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  loading: false,
  error: false,
  posts: [],
  selectedPost: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POSTS_START:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.FETCH_POSTS_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case actionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        posts: action.payload,
      };

    case actionTypes.SELECT_POST:
      return {
        ...state,
        selectedPost: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
