import { api } from "./axios";
import { createAsyncAction } from "redux-promise-middleware-actions";

export const getMoviesTrending = createAsyncAction(
  "FETCH_MOVIES_TRENDING",
  async () => {
    const res = await api.get("/movies/trending");
    return res.data;
  }
);

export const getMoviesPopular = createAsyncAction(
  "FETCH_MOVIES_POPULAR",
  async () => {
    const res = await api.get("/movies/popular");
    return res.data;
  }
);
