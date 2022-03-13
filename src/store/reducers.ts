import { combineReducers } from "redux";
import { themeReducer } from "./theme/reducer";
import { moviePopularReducer, movieTrendingReducer } from "./movies/index";

export const reducer = combineReducers({
  popular: moviePopularReducer,
  trending: movieTrendingReducer,
  theme: themeReducer,
});
