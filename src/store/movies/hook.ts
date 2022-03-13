import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesPopular, getMoviesTrending } from "../../services/Actions";
import {
  getMoviesPopularApi,
  getMoviesTrendingApi,
} from "../../services/movies";
import { UseMoviesProps } from "./types";

export const useMovies = () => {
  const movies = useSelector((state: any) => state.movies);
  const dispatch = useDispatch();

  const refleshMovies = async () => {
    dispatch({ type: "SET_LOADING", payload: true });

    Promise.all([
      dispatch(getMoviesTrending()),
      dispatch(getMoviesPopular()),
    ]).then(() => {
      console.log("refleshMovies aaaa");
      dispatch({ type: "SET_LOADING", payload: false });
    });
  };

  const setMovies = async (where: string, page: number) => {
    const newMovies =
      where === "POPULAR"
        ? await getMoviesPopularApi(page)
        : await getMoviesTrendingApi(page);
    const newMoviesList = [...movies.popular, ...newMovies];
    dispatch({ type: `SET_MOVIES_${where}`, payload: newMoviesList });
  };

  useEffect(() => {
    setTimeout(() => {
      refleshMovies();
    }, 3000);
  }, [dispatch]);

  return { movies, setMovies, refleshMovies } as UseMoviesProps;
};
