import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_MOVIE } from "../actions";
import { createPromise } from "redux-promise-middleware";
import { getMovies, promiseTeste } from "../../services/Actions";

import { asyncReducer } from "redux-promise-middleware-actions";

export const useMovies = () => {
  const movies = useSelector((state: any) => state.movies);

  // useDispach wih this hook
  const dispatch = useDispatch();

  const refleshMovies = useCallback(async () => {
    console.log("refleshMovies");
    const movie = getMovies();
    await movie(dispatch);
  }, [dispatch]);

  const teste = async () => {
    dispatch(promiseTeste());
  };

  // useEffect(() => {
  //   refleshMovies();
  // }, [dispatch]);

  return { movies, refleshMovies, teste };
};
