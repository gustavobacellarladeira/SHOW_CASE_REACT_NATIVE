export interface MovieListProps {
  loading: boolean;
  trending: any[];
  popular: any[];
}

export interface UseMoviesProps {
  movies: MovieListProps;
  setMovies: (where: string, page: number) => void;
  refleshMovies: () => void;
}
