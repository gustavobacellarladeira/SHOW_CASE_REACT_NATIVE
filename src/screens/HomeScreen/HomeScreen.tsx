import React, { useEffect } from "react";
import { Button, FlatList, Text } from "react-native";
import { SkeletonMovieScreen } from "../../components/Skeleton/SkeletonMovieScreen";
import {
  Container,
  ContainerSection,
  FlatlistCard,
  SectionPrimary,
  SectionSecondary,
  SkeletonContainer,
  TitleFlatlistContainer,
} from "./Styles";

import { useThemeRedux } from "../../store/theme/hook";
import { useMovies } from "../../store/movies/hook";
import { MovieListProps } from "./types";

export const HomeScreen = () => {
  const { useSwitchTheme } = useThemeRedux();
  const { movies, refleshMovies } = useMovies();
  useEffect(() => {
    console.log("HomeScreen");
    console.log("trending -->", movies.trending.length);
    console.log("popular -->", movies.popular.length);
  }, [movies]);

  if (movies.loading) {
    return <SkeletonMovieScreen />;
  }

  const movieList = (props: MovieListProps) => {
    const { loading, movies, name } = props;

    return (
      <SectionSecondary>
        <TitleFlatlistContainer>
          <Text>{name}</Text>
        </TitleFlatlistContainer>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={{}}
          contentContainerStyle={{}}
          data={[1, 2, 3, 4, 5]}
          renderItem={({ item }) => (
            <SkeletonContainer>
              <FlatlistCard>
                <Text> oi </Text>
              </FlatlistCard>
            </SkeletonContainer>
          )}
          keyExtractor={(item) => item.toString()}
        />
      </SectionSecondary>
    );
  };

  return (
    <Container>
      {/* CABEÇALHO DO CONTEÚDO */}
      <SectionPrimary>
        <Text> Primary </Text>

        <Button title="Change Theme" onPress={() => useSwitchTheme()} />
        <Button title="Change Theme" onPress={() => refleshMovies()} />
      </SectionPrimary>
      {/* LISTAS DE FILMES */}
      <ContainerSection>
        {movieList({
          loading: true,
          movies: movies.trending,
          name: "Trending",
        })}
        {movieList({ loading: true, movies: movies.popular, name: "Popular" })}
      </ContainerSection>
    </Container>
  );
};
