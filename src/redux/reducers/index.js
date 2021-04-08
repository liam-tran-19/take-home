import {combineReducers} from 'redux';
import movieListReducer from './movie'

export const rootReducer = combineReducers({
  movieState: movieListReducer,
})