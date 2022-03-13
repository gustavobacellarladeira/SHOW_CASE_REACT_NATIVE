import { ActionType } from "redux-promise-middleware";
import { MovieListProps } from "./types";

const INITIAL_STATE = <MovieListProps>{
  loading: true,
  trending: [] as any[],
  popular: [] as any[],
};

export const movieReducer = (
  state = INITIAL_STATE,
  action: { type: any; payload: { id: any } }
) => {
  switch (action.type) {
    // set movies

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
