import { api } from "./axios";

const LIMIT = 15;

export const getMoviesPopularApi = async (page: number) => {
  const res = await api.get(`/movies/popular?page=${page}&limit=${LIMIT}`);
  return res.data;
};
