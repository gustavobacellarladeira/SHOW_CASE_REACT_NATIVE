import React from "react";
import { Button } from "react-native";
import { useMovies } from "../../store/hooks/movies";
import { Container, Title } from "./Styles";

const MOVIES = [
  {
    id: 1,
    title: "The Shawshank Redemption",
  },
  {
    id: 2,
    title: "The Godfather",
  },
  {
    id: 3,
    title: "The Godfather: Part II",
  },
  {
    id: 4,
    title: "The Dark Knight",
  },
  {
    id: 5,
    title: "The Dark Knight",
  },
  {
    id: 46,
    title: "The Dark Knight",
  },
];

export const HomeScreen = () => {
  const { movies, setMovie } = useMovies();
  console.log(movies);
  return (
    <Container>
      <Title>HomeScreen</Title>
      <Button
        title="get Movies"
        onPress={() => console.log("movies -->", movies)}
      />

      <Button title="set Movies" onPress={() => setMovie(MOVIES)} />
    </Container>
  );
};
