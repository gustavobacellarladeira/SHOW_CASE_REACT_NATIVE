import { ActionType } from "redux-promise-middleware";

const INITIAL_STATE = <any>{
  loading: true,
  trending: [],
  popular: [],
};

export const movieReducer = (
  state = INITIAL_STATE,
  action: { type: any; payload: { id: any } }
) => {
  switch (action.type) {
    // trending
    case `FETCH_MOVIES_TRENDING_${ActionType.Pending}`:
      return (state = { ...state });
    case `FETCH_MOVIES_TRENDING_${ActionType.Fulfilled}`:
      return (state = { ...state, trending: action.payload });
    case `FETCH_MOVIES_TRENDING_${ActionType.Rejected}`:
      return (state = { ...state });

    // popular
    case `FETCH_MOVIES_POPULAR_${ActionType.Pending}`:
      return (state = { ...state });
    case `FETCH_MOVIES_POPULAR_${ActionType.Fulfilled}`:
      return (state = { ...state, popular: action.payload });
    case `FETCH_MOVIES_POPULAR_${ActionType.Rejected}`:
      return (state = { ...state });

    case "SET_LOADING":
      return (state = { ...state, loading: action.payload });

    default:
      return state;
  }
};
