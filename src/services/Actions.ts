import { api } from "./axios";
import { createAsyncAction } from "redux-promise-middleware-actions";

export const promiseTeste = createAsyncAction("FETCH_MOVIES", async () => {
  const res = await api.get("/movies/trending");
  return JSON.stringify(res.data);
});

export const getMovies = () => {
  return async (dispatch: any) => {
    const response = await api.get("/movies/trending");

    dispatch({
      type: "SET_MOVIE",
      payload: response.data,
    });
  };
};
