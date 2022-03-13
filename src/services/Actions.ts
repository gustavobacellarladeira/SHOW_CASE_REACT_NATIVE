import { api } from "./axios";
import { createAsyncAction } from "redux-promise-middleware-actions";

const LIMIT = 50;
const PAGE = 1;

export const getMoviesPopular = createAsyncAction(
  "FETCH_MOVIES",
  async (page) => {
    const res = await api.get(`/movies/popular?page=${page}&limit=${LIMIT}`);
    return res.data;
  }
);
