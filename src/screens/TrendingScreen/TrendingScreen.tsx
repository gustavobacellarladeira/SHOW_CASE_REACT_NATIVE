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

export const TrendingScreen = () => {
  const { trending, loadingMovies, getTrendingMovies } = useMovies();
  const [page, setPage] = useState<number>(1);
  const [isEndList, setIsEndList] = useState<boolean>(false);

  useEffect(() => {
    if (trending.length === 0) {
      getTrendingMovies(page);
    }
  }, []);

  useEffect(() => {
    console.log("trending -->", trending.length);
    console.log("getTrendingMovies -->", loadingMovies);
  }, [loadingMovies]);

  useEffect(() => {
    console.log("trending -->", trending.length);
  }, [trending.length]);

  const handlerLoadMorePopularMovies = useCallback(() => {
    let moviesLength = trending.length;
    // falta uma variavel na api para saber se tem mais para loading ou nao...
    // por isso irei colocar um maximo no length de movies
    if (moviesLength >= LIMIT_MOVIES) {
      console.log("Não há mais filmes para carregar");
      setIsEndList(true);
      return;
    } else {
      getTrendingMovies(page + 1);
      setPage((prev) => prev + 1);
    }
  }, [page, getTrendingMovies, trending.length]);

  return (
    <Container>
      {/* CABEÇALHO DO CONTEÚDO */}
      <SectionPrimary>
        <TitleSectionPrimary>Lista de filmes</TitleSectionPrimary>
        <Button title="Popular" onPress={() => {}} />
        <Button title="Trending" onPress={() => {}} />
      </SectionPrimary>
      {/* LISTAS DE FILMES */}
      <SectionSecondary>
        <FlatList
          style={{}}
          contentContainerStyle={{}}
          data={loadingMovies ? FAKE_MOVIES : trending}
          renderItem={({ item }) => (
            <FlatlistContainer>
              {loadingMovies ? (
                <Skeleton borderRadius={5} />
              ) : (
                <TitleSectionPrimary> {item.movie.title} </TitleSectionPrimary>
              )}
            </FlatlistContainer>
          )}
          keyExtractor={(item) =>
            loadingMovies
              ? item.toString()
              : item.movie.ids.slug + item.movie.ids.trakt
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
