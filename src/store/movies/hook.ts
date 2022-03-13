import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesPopular, getMoviesTrending } from "../../services/Actions";

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

  useEffect(() => {
    setTimeout(() => {
      refleshMovies();
    }, 3000);
  }, [dispatch]);

  return { movies, refleshMovies };
};
