import React, { useEffect } from "react";
import { Button, FlatList } from "react-native";
import { useMovies } from "../../store/hooks/movies";
import { Container, Title } from "./Styles";

export const HomeScreen = () => {
  const { movies, refleshMovies, teste } = useMovies();

  // console.log("movies", movies);

  const renderItem = ({ item }) => {
    console.log("item", item.mo);
    const { title, id } = item.movie;
    return <Title>{title} </Title>;
  };

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
    </Container>
  );
};
