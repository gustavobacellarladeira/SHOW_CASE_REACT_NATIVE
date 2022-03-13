import { ActionType } from "redux-promise-middleware";

const INITIAL_STATE = <any>{
  name: "Popular",
  loading: true,
  popular: [] as any[],
};

export const moviePopularReducer = (
  state = INITIAL_STATE,
  action: { type: any; payload: { id: any } }
) => {
  switch (action.type) {
    case "SET_MOVIES_POPULAR":
      return { ...state, popular: action.payload };

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
