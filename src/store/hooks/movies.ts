import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_MOVIE } from "../actions";
import { createPromise } from "redux-promise-middleware";
import { getMovies } from "../../services/Actions";

import { asyncReducer } from "redux-promise-middleware-actions";

export const useMovies = () => {
  const movies = useSelector((state: any) => state.movies);

  // useDispach wih this hook
  const dispatch = useDispatch();

  const refleshMovies = async () => {
    dispatch(getMovies());
  };

  useEffect(() => {
    setTimeout(() => {
      refleshMovies();
    }, 3000);
  }, [dispatch]);

  return { movies, refleshMovies };
};
