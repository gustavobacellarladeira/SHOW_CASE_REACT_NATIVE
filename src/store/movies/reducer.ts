import { ActionType } from "redux-promise-middleware";
import {
  POPULAR_ACTON,
  SET_LOADING,
  SET_MOVIES,
  SET_MOVIES_NAME,
  TRENDING_ACTON,
} from "./actions";

const INITIAL_STATE = <any>{
  name: "Popular",
  loading: true,
  movies: [] as any[],
  popular: [] as any[],
  trending: [] as any[],
};

export const movieReducer = (
  state = INITIAL_STATE,
  action: { type: any; payload: { id: any } }
) => {
  // console.log("movieReducer", action);

  switch (action.type) {
    case SET_MOVIES:
      return { ...state, movies: action.payload };

    case SET_LOADING:
      return { ...state, loading: action.payload };

    case SET_MOVIES_NAME:
      return (state = { ...state, name: action.payload });

    // popular
    case `${POPULAR_ACTON}${ActionType.Pending}`:
      return (state = { ...state });
    case `${POPULAR_ACTON}${ActionType.Fulfilled}`:
      return { ...state, popular: state.popular.concat(action.payload) };
    case `${POPULAR_ACTON}${ActionType.Rejected}`:
      return (state = { ...state });

    // popular
    case `${TRENDING_ACTON}${ActionType.Pending}`:
      return (state = { ...state });
    case `${TRENDING_ACTON}${ActionType.Fulfilled}`:
      return { ...state, trending: state.trending.concat(action.payload) };
    case `${TRENDING_ACTON}${ActionType.Rejected}`:
      return (state = { ...state });

    default:
      return state;
  }
};
