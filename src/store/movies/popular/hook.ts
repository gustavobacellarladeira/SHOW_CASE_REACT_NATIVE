import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesPopular } from "../../../services/Actions";
import { getMoviesPopularApi } from "../../../services/movies";

export const useMoviesPopular = () => {
  const moviesPopular = useSelector((state: any) => state.movies.popular);
  const loadingMoviesPopular = useSelector(
    (state: any) => state.movies.loading
  );

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
    moviesPopular,
    setMoviesPopular,
    refleshMoviesPopular,
    loadingMoviesPopular,
  };
};
