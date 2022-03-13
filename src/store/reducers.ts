import { combineReducers } from "redux";
import { themeReducer } from "./theme/reducer";
import { movieReducer } from "./movies/index";

export const reducer = combineReducers({
  movies: movieReducer,
  theme: themeReducer,
});
