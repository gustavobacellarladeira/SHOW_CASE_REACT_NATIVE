import { ActionType } from "redux-promise-middleware";

const INITIAL_STATE = <any>{
  loading: true,
  data: [],
};

export const movieReducer = (
  state = INITIAL_STATE,
  action: { type: any; payload: { id: any } }
) => {
  switch (action.type) {
    case `FETCH_MOVIES_${ActionType.Pending}`:
      return (state = { ...state, loading: true });
    case `FETCH_MOVIES_${ActionType.Fulfilled}`:
      return (state = { loading: false, data: action.payload });
    case `FETCH_MOVIES_${ActionType.Rejected}`:
      return (state = { data: [], loading: false });
    default:
      return state;
  }
};
