import { combineReducers } from "redux";
import { themeReducer } from "./theme/reducer";
// import { movieReducer } from "./reducers/movies";

export const reducer = combineReducers({
  // movies: movieReducer,
  theme: themeReducer,
});
