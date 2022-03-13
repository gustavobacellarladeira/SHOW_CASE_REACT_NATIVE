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
import { useMoviesTrending } from "../../store/movies/trendings/hook";
import { LIMIT_MOVIES } from "../../constants/movies";

const LIMIT = 200;
let WHERE = "TRENDING";

export const TrendingScreen = () => {
  const { moviesTrending, loadingMoviesTrending, setMoviesTrending } =
    useMoviesTrending();
  const [page, setPage] = useState<number>(1);
  const [isEndList, setIsEndList] = useState<boolean>(false);
  useEffect(() => {
    console.log("moviesTrending -->", moviesTrending.length);
    console.log("loadingMoviesTrending -->", loadingMoviesTrending);
  }, [loadingMoviesTrending]);

  const handlerLoadMorePopularMovies = useCallback(() => {
    let moviesLength = moviesTrending.length;
    // falta uma variavel na api para saber se tem mais para loading ou nao...
    // por isso irei colocar um maximo no length de movies.popular
    if (moviesLength >= LIMIT_MOVIES) {
      console.log("Não há mais filmes para carregar");
      setIsEndList(true);
      return;
    } else {
      setMoviesTrending(page + 1);
      setPage(page + 1);
    }
  }, []);

  return (
    <Container>
      {/* CABEÇALHO DO CONTEÚDO */}
      <SectionPrimary>
        <TitleSectionPrimary>lista de filmes {WHERE}</TitleSectionPrimary>
      </SectionPrimary>
      {/* LISTAS DE FILMES */}
      {/* <SectionSecondary>
        <FlatList
          style={{}}
          contentContainerStyle={{}}
          data={
            !movies.loading
              ? movies.trending
              : [
                  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                  19, 20,
                ]
          }
          renderItem={({ item }) => (
            <FlatlistContainer>
              {movies.loading ? (
                <Skeleton borderRadius={5} />
              ) : (
                <TitleSectionPrimary> {item.title} </TitleSectionPrimary>
              )}
            </FlatlistContainer>
          )}
          keyExtractor={(item) =>
            !movies.loading ? item.title : item.toString()
          }
          onEndReached={handlerLoadMoreMovies}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            movies.loading ? (
              <View>
                <ActivityIndicator size="large" color="red" />
              </View>
            ) : (
              <>{isEndList && <Text>Não há mais filmes para carregar</Text>}</>
            )
          }
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          windowSize={10}
          updateCellsBatchingPeriod={100}
          removeClippedSubviews={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={
            <Text>
              {movies.loading ? "Carregando..." : "Nenhum filme encontrado"}
            </Text>
          }
        />
      </SectionSecondary> */}
    </Container>
  );
};

// <TitleSectionPrimary> {item.title} </TitleSectionPrimary>
