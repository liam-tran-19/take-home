import {
  MOVIE_SEARCH_LOADING,
  MOVIE_SEARCH_SUCCESSFUL,
  MOVIE_SEARCH_FAIL,
} from "../constants/index";

const DefaultState = {
  loading: false,
  data: [],
  errorMsg: "",
};

const movieListReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case MOVIE_SEARCH_LOADING:
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case MOVIE_SEARCH_FAIL:
      return {
        ...state,
        loading: false,
        errorMsg: "unable to get movie",
      };
    case MOVIE_SEARCH_SUCCESSFUL:
      return {
        ...state,
        loading: false,
        data: action.payload,
        errorMsg: "",
      };
    default:
      return state;
  }
};

export default movieListReducer;
