import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesPopular, getMoviesTrending } from "../../services/Actions";

const promiseHelper = async (
  dispatch: (arg0: {
    type: string;
    payload: boolean | Promise<any>;
    meta?: unknown;
  }) => void,
  _promise: Promise<any>
) => {
  try {
    dispatch({ type: "SET_LOADING", payload: true });
    Promise.resolve([dispatch(await _promise)]);
  } catch (error) {
    console.log(error);
  } finally {
    dispatch({ type: "SET_LOADING", payload: false });
  }
};

export const useMovies = () => {
  const store = useSelector((state: any) => state.movies);
  const { loading, movies, name, popular, trending } = store;
  const dispatch = useDispatch();

  // const refleshMovies = async (page = 1, type = "") => {
  //   dispatch({ type: "SET_LOADING", payload: true });
  //   Promise.resolve([dispatch(getMovies(page, type))]).then(() => {
  //     dispatch({ type: "SET_LOADING", payload: false });
  //   });
  // };

  const getPopularMovies = async (page = 1) =>
    promiseHelper(dispatch, getMoviesPopular(page));

  const getTrendingMovies = async (page = 1) => {
    promiseHelper(dispatch, getMoviesTrending(page));
  };

  const setMovies = async (movies: number) => {
    dispatch({ type: "SET_MOVIES", payload: movies });
  };

  return {
    popular: popular,
    trending: trending,
    movies: name,
    setMovies,
    loadingMovies: loading,
    getPopularMovies,
  };
};
