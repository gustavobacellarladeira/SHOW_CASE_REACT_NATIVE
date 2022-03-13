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

export const HomeScreen = () => {
  const { useSwitchTheme } = useThemeRedux();
  const { movies, refleshMovies } = useMovies();
  useEffect(() => {
    console.log("HomeScreen");
    console.log("movies -->", movies);
  }, [movies]);

  const skeletonList = () => {
    return (
      <SectionSecondary>
        <TitleFlatlistContainer>
          <Text>Title</Text>
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
        {skeletonList()}
        {skeletonList()}
      </ContainerSection>
    </Container>
  );
};
