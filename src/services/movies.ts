import { api } from "./axios";

const LIMIT = 15;

export const getMoviesTrendingApi = async (page: number) => {
  const res = await api.get(`/movies/trending?page=${page}&limit=${LIMIT}`);
  return res.data;
};

export const getMoviesPopularApi = async (page: number) => {
  const res = await api.get(`/movies/popular?page=${page}&limit=${LIMIT}`);
  return res.data;
};
