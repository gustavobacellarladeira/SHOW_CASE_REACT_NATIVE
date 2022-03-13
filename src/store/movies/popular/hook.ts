import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesPopular } from "../../../services/Actions";
import { getMoviesPopularApi } from "../../../services/movies";

export const useMoviesPopular = () => {
  const moviesPopular = useSelector((state: any) => state.popular);
  const loadingMoviesPopular = moviesPopular.loading;
  const moviesName = moviesPopular.name;

  const dispatch = useDispatch();

  const refleshMoviesPopular = async () => {
    dispatch({ type: "SET_LOADING", payload: true });
    Promise.all([dispatch(getMoviesPopular())]).then(() => {
      dispatch({ type: "SET_LOADING", payload: false });
    });
  };

  const setMoviesPopular = async (page: number) => {
    const newMovies = await getMoviesPopularApi(page);

    const newMoviesList = [...moviesPopular.popular, ...newMovies];
    dispatch({ type: "SET_MOVIES_POPULAR", payload: newMoviesList });
  };

  useEffect(() => {
    setTimeout(() => {
      refleshMoviesPopular();
    }, 3000);
  }, [dispatch]);

  return {
    moviesName,
    moviesPopular: moviesPopular.popular,
    setMoviesPopular,
    refleshMoviesPopular,
    loadingMoviesPopular,
  };
};
