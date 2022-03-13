import { ActionType } from "redux-promise-middleware";

const INITIAL_STATE = <any>{
  name: "Popular",
  loading: true,
  movies: [] as any[],
};

export const movieReducer = (
  state = INITIAL_STATE,
  action: { type: any; payload: { id: any } }
) => {
  // console.log("movieReducer", action);

  switch (action.type) {
    case "SET_MOVIES":
      return { ...state, movies: action.payload };

    case "SET_LOADING":
      return { ...state, loading: action.payload };

    case "SET_MOVIES_NAME":
      return (state = { ...state, name: action.payload });

    // popular
    case `FETCH_MOVIES_${ActionType.Pending}`:
      return (state = { ...state });
    case `FETCH_MOVIES_${ActionType.Fulfilled}`:
      return { ...state, movies: state.movies.concat(action.payload) };
    case `FETCH_MOVIES_${ActionType.Rejected}`:
      return (state = { ...state });

    default:
      return state;
  }
};
