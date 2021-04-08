import axios from "axios";
import { apiGetMovie } from "../../api";
import {
  MOVIE_SEARCH_LOADING,
  MOVIE_SEARCH_SUCCESSFUL,
  MOVIE_SEARCH_FAIL,
} from "../constants/index";

export const GetMovieList = (title, type, year) => async (dispatch) => {
  try {
    dispatch({
      type: MOVIE_SEARCH_LOADING,
    });

    const res = await axios.get(apiGetMovie(title, type, year));
    console.log(res.data);
    dispatch({
      type: MOVIE_SEARCH_SUCCESSFUL,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: MOVIE_SEARCH_FAIL,
    });
  }
};
