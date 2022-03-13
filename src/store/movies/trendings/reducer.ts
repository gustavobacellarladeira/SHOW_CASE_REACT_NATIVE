import { ActionType } from "redux-promise-middleware";

const INITIAL_STATE = <any>{
  loading: true,
  trending: [] as any[],
};

export const movieTrendingReducer = (
  state = INITIAL_STATE,
  action: { type: any; payload: { id: any } }
) => {
  switch (action.type) {
    case "SET_MOVIES_TRENDING":
      return { ...state, trending: action.payload };
    // trending
    case `FETCH_MOVIES_TRENDING_${ActionType.Pending}`:
      return (state = { ...state });
    case `FETCH_MOVIES_TRENDING_${ActionType.Fulfilled}`:
      return (state = { ...state, trending: action.payload });
    case `FETCH_MOVIES_TRENDING_${ActionType.Rejected}`:
      return (state = { ...state });
    case "SET_MOVIES_POPULAR":
      return { ...state, popular: action.payload };

    case "SET_LOADING":
      return (state = { ...state, loading: action.payload });

    default:
      return state;
  }
};
