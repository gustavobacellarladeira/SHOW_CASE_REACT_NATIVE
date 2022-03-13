import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesPopular } from "../../services/Actions";
import { getMoviesPopularApi } from "../../services/movies";

export const useMovies = () => {
  const store = useSelector((state: any) => state.movies);
  const { loading, movies, name } = store;
  const dispatch = useDispatch();

  const refleshMovies = async (page = 1) => {
    dispatch({ type: "SET_LOADING", payload: true });
    Promise.all([dispatch(getMoviesPopular(page))]).then(() => {
      dispatch({ type: "SET_LOADING", payload: false });
    });
  };

  const setMovies = async (movies: number) => {
    dispatch({ type: "SET_MOVIES", payload: movies });
  };

  return {
    moviesName: name,
    movies,
    setMovies,
    refleshMovies,
    loadingMovies: loading,
  };
};
