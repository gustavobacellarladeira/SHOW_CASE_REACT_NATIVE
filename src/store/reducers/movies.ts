// const INITIAL_STATE = <any>[];

// export const movieReducer = (
//   state = INITIAL_STATE,
//   action: { type: any; payload: { id: any } }
// ) => {
//   switch (action.type) {
//     case "SET_MOVIE":
//       return (state = action.payload);
//     default:
//       return state;
//   }
// };

import { ActionType } from "redux-promise-middleware";

import {
  asyncReducer,
  createAsyncAction,
  createReducer,
} from "redux-promise-middleware-actions";
import { promiseTeste } from "../../services/Actions";
import { api } from "../../services/axios";

const INITIAL_STATE = <any>[];

export const movieReducer = (
  state = INITIAL_STATE,
  action: { type: any; payload: { id: any } }
) => {
  // console.log("movieReducer -->", action);
  console.log("action.type --->", action.type);
  console.log("action.type --->", action.payload);

  switch (action.type) {
    case `FETCH_MOVIES_${ActionType.Pending}`:
      return (state = []);

    case `FETCH_MOVIES`:
      return (state = action.payload);

    case `FETCH_MOVIES_${ActionType.Rejected}`:
      return (state = []);

    default:
      return state;
  }
};
