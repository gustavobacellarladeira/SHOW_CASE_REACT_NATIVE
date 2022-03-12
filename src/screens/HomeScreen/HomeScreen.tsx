import React, { useEffect } from "react";
import { Button, FlatList } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { useMovies } from "../../store/hooks/movies";
import { SkeletonMovieScreen } from "../MovieScreen/SkeletonMovieScreen";
import { Container, Title } from "./Styles";

export const HomeScreen = () => {
  const { movies, refleshMovies, teste } = useMovies();

  // console.log("movies", movies);

  useEffect(() => {
    console.log("teste movies ", movies);
  }, [movies]);

  const renderItem = ({ item }) => {
    console.log("item", item.mo);
    const { title, id } = item.movie;
    return <Title>{title} </Title>;
  };

  if (movies.loading) {
    return <SkeletonMovieScreen />;
  }

  return (
    <Container>
      {/* <Title>HomeScreen</Title>
      <Button title="get refleshMovies" onPress={() => refleshMovies()} /> */}

      {/* <Button
        title="gTESTE aaaaaa"
        onPress={() => console.log("MAIS UM CONSOLE -->", movies)}
      /> */}

      <Button title="gTESTE" onPress={() => teste()} />

      {/* <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={(item) => item.movie.title}
      /> */}

      {movies.loading ? <ActivityIndicator /> : <Title>Carregado</Title>}
    </Container>
  );
};
