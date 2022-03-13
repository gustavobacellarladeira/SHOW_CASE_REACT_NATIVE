import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesTrending } from "../../../services/Actions";
import { getMoviesTrendingApi } from "../../../services/movies";

export const useMoviesTrending = () => {
  const moviesTrending = useSelector((state: any) => state.trending);
  const loadingMoviesTrending = moviesTrending.loading;
  const moviesName = moviesTrending.name;

  const dispatch = useDispatch();

  const refleshMoviesTrending = async () => {
    dispatch({ type: "SET_LOADING", payload: true });

    Promise.all([dispatch(getMoviesTrending())]).then(() => {
      dispatch({ type: "SET_LOADING", payload: false });
    });
  };

  const setMoviesTrending = async (page: number) => {
    const newMovies = await getMoviesTrendingApi(page);
    const newMoviesList = [...moviesTrending.trending, ...newMovies];
    dispatch({ type: "SET_MOVIES_TRENDING", payload: newMoviesList });
  };

  useEffect(() => {
    setTimeout(() => {
      refleshMoviesTrending();
    }, 3000);
  }, [dispatch]);

  return {
    moviesName,
    moviesTrending: moviesTrending.trending,
    setMoviesTrending,
    refleshMoviesTrending,
    loadingMoviesTrending,
  };
};
