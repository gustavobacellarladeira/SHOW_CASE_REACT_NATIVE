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
  const { movies, loadingMovies, moviesName, refleshMovies } = useMovies();
  const [page, setPage] = useState<number>(1);
  const [isEndList, setIsEndList] = useState<boolean>(false);

  useEffect(() => {
    console.log("Movies -->", movies.length);
    console.log("loadingMoviesMovies -->", loadingMovies);
  }, [loadingMovies]);

  useEffect(() => {
    console.log("Movies -->", movies.length);
  }, [movies.length]);

  const handlerLoadMorePopularMovies = useCallback(() => {
    let moviesLength = movies.length;
    // falta uma variavel na api para saber se tem mais para loading ou nao...
    // por isso irei colocar um maximo no length de movies
    if (moviesLength >= LIMIT_MOVIES) {
      console.log("Não há mais filmes para carregar");
      setIsEndList(true);
      return;
    } else {
      refleshMovies(page + 1);
      setPage((prev) => prev + 1);
    }
  }, [page, refleshMovies, movies.length]);

  return (
    <Container>
      {/* CABEÇALHO DO CONTEÚDO */}
      <SectionPrimary>
        <TitleSectionPrimary>Lista de filmes {moviesName}</TitleSectionPrimary>
      </SectionPrimary>
      {/* LISTAS DE FILMES */}
      <SectionSecondary>
        <FlatList
          style={{}}
          contentContainerStyle={{}}
          data={loadingMovies ? FAKE_MOVIES : movies}
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
            loadingMovies ? item.toString() : item.ids.slug || item.title
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
