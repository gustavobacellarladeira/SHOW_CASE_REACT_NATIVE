import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import {
  Container,
  ContainerSection,
  FlatlistContainer,
  SectionPrimary,
  SectionSecondary,
  SkeletonContainer,
  TitleFlatlistContainer,
  TitleSectionPrimary,
} from "./Styles";

import { Skeleton } from "../../components";
import { useMovies } from "../../store/movies/hook";
import { FAKE_MOVIES, LIMIT_MOVIES } from "../../constants/movies";

export const PopularScreen = () => {
  const { popular, loadingMovies, getPopularMovies } = useMovies();
  const [page, setPage] = useState<number>(1);
  const [isEndList, setIsEndList] = useState<boolean>(false);

  useEffect(() => {
    console.log("Movies -->", popular.length);
    console.log("loadingMoviesMovies -->", loadingMovies);
  }, [loadingMovies]);

  useEffect(() => {
    console.log("Movies -->", popular.length);
  }, [popular.length]);

  const handlerLoadMorePopularMovies = useCallback(() => {
    let moviesLength = popular.length;
    // falta uma variavel na api para saber se tem mais para loading ou nao...
    // por isso irei colocar um maximo no length de movies
    if (moviesLength >= LIMIT_MOVIES) {
      console.log("Não há mais filmes para carregar");
      setIsEndList(true);
      return;
    } else {
      getPopularMovies(page + 1);
      setPage((prev) => prev + 1);
    }
  }, [page, getPopularMovies, popular.length]);

  return (
    <Container>
      {/* CABEÇALHO DO CONTEÚDO */}
      <SectionPrimary>
        <TitleSectionPrimary>Lista de filmes </TitleSectionPrimary>
        <Button title="Popular" onPress={() => {}} />
        <Button title="Trending" onPress={() => {}} />
      </SectionPrimary>
      {/* LISTAS DE FILMES */}
      <SectionSecondary>
        <FlatList
          style={{}}
          contentContainerStyle={{}}
          data={loadingMovies ? FAKE_MOVIES : popular}
          renderItem={({ item }) => (
            <FlatlistContainer>
              {loadingMovies ? (
                <Skeleton borderRadius={5} />
              ) : (
                <TitleSectionPrimary> {item.title} </TitleSectionPrimary>
              )}
            </FlatlistContainer>
          )}
          keyExtractor={(item) =>
            loadingMovies ? item.toString() : item.ids.slug + item.ids.trakt
          }
          onEndReached={handlerLoadMorePopularMovies}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            loadingMovies ? (
              <View></View>
            ) : (
              <>{isEndList && <Text>Não há mais filmes para carregar</Text>}</>
            )
          }
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={
            <Text>
              {loadingMovies ? "Carregando..." : "Nenhum filme encontrado"}
            </Text>
          }
        />
      </SectionSecondary>
    </Container>
  );
};

// <TitleSectionPrimary> {item.title} </TitleSectionPrimary>
