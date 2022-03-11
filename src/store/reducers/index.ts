import { combineReducers } from "redux";
import { movieReducer } from "./movies";

export const reducer = combineReducers({
  movies: movieReducer,
});
