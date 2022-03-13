import { combineReducers } from "redux";
import { themeReducer } from "./theme/reducer";
import { movieReducer } from "./movies/reducer";

export const reducer = combineReducers({
  movies: movieReducer,
  theme: themeReducer,
});
