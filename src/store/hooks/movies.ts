import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../services/Actions";

export const useMovies = () => {
  const movies = useSelector((state: any) => state.movies);
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
