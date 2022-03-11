import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_MOVIE } from "../actions";

export const useMovies = () => {
  const movies = useSelector((state: any) => state.movies);

  // useDispach wih this hook
  const dispatch = useDispatch();

  // useEffect wih this hook
  useEffect(() => {
    // if (moviesData) {
    //   dispatch({
    //     type: SET_MOVIE,
    //     payload: JSON.parse(moviesData),
    //   });
    // }
  }, [dispatch]);

  // useSelector wih this hook
  const setMovie = (movie: any) => {
    dispatch({
      type: SET_MOVIE,
      payload: movie,
    });
  };

  return { movies, setMovie };
};
