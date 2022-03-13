import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { themeReducer } from "./themeReducer";

const store = createStore(
  combineReducers({ themeReducer }),
  applyMiddleware(thunk)
);

export { store };
