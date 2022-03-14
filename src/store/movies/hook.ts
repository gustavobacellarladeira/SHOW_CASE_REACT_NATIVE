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
  const { loading, name, popular, trending } = store;
  const dispatch = useDispatch();

  const getPopularMovies = async (page = 1) =>
    promiseHelper(dispatch, getMoviesPopular(page));

  const getTrendingMovies = async (page = 1) => {
    promiseHelper(dispatch, getMoviesTrending(page));
  };

  // useEffect(() => {
  //   try {
  //     Promise.all([getPopularMovies(), getTrendingMovies()]);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  return {
    popular: popular,
    trending: trending,
    movies: name,
    loadingMovies: loading,
    getPopularMovies,
    getTrendingMovies,
  };
};
