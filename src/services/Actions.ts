import { api } from "./axios";
import { createAsyncAction } from "redux-promise-middleware-actions";

export const getMovies = createAsyncAction("FETCH_MOVIES", async () => {
  const res = await api.get("/movies/trending");
  return res.data;
});
