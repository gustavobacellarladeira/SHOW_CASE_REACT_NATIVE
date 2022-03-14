import { api } from "./axios";
import { createAsyncAction } from "redux-promise-middleware-actions";

const LIMIT = 15;
const PAGE = 1;

export const getMoviesPopular = createAsyncAction(
  "FETCH_MOVIES_POUPULAR",
  async (page) => {
    let params = "/movies/popular";
    const res = await api.get(`${params}?page=${page}&limit=${LIMIT}`);
    return res.data;
  }
);

export const getMoviesTrending = createAsyncAction(
  "FETCH_MOVIES_TRENDING",
  async (page) => {
    let params = "/movies/trending";
    const res = await api.get(`${params}?page=${page}&limit=${LIMIT}`);
    return res.data;
  }
);
