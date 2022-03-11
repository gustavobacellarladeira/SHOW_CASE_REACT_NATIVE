import { applyMiddleware, createStore } from "redux";
import { reducer } from "./reducers/index";
import promiseMiddleware from "redux-promise-middleware";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";

applyMiddleware(promiseMiddleware)(createStore);

const store = createStore(reducer, {}, applyMiddleware(promise));
export { store };
