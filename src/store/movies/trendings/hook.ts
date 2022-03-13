import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesTrending } from "../../../services/Actions";
import { getMoviesTrendingApi } from "../../../services/movies";

export const useMovies = () => {
  const moviesTrending = useSelector((state: any) => state.movies);
  const loadingMoviesTrending = useSelector((state: any) => state.loading);

  const dispatch = useDispatch();

  const refleshMoviesTrending = async () => {
    dispatch({ type: "SET_LOADING", payload: true });

    Promise.all([dispatch(getMoviesTrending())]).then(() => {
      dispatch({ type: "SET_LOADING", payload: false });
    });
  };

  const setMoviesTrending = async (page: number) => {
    const newMovies = await getMoviesTrendingApi(page);
    const newMoviesList = [...moviesTrending.popular, ...newMovies];
    dispatch({ type: "SET_MOVIES_TRENDING", payload: newMoviesList });
  };

  useEffect(() => {
    setTimeout(() => {
      refleshMoviesTrending();
    }, 3000);
  }, [dispatch]);

  return {
    moviesTrending,
    setMoviesTrending,
    refleshMoviesTrending,
    loadingMoviesTrending,
  };
};
