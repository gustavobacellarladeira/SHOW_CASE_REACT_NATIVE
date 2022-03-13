import { api } from "./axios";
import { createAsyncAction } from "redux-promise-middleware-actions";

const LIMIT = 15;
const PAGE = 1;

export const getMoviesTrending = createAsyncAction(
  "FETCH_MOVIES_TRENDING",
  async () => {
    const res = await api.get(`/movies/trending?page=${PAGE}&limit=${5}`);
    return res.data;
  }
);

export const getMoviesPopular = createAsyncAction(
  "FETCH_MOVIES_POPULAR",
  async () => {
    const res = await api.get(`/movies/popular?page=${PAGE}&limit=${LIMIT}`);
    return res.data;
  }
);
