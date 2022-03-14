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
  EmptyList,
  EmptyListText,
  EndList,
  EndListText,
  FlatListCard,
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
import { TitleFlatlist } from "../PopularScreen/Styles";

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

  const renderItem = ({ item, index }) => {
    return (
      <FlatlistContainer>
        {loadingMovies ? (
          <Skeleton borderRadius={5} />
        ) : (
          <FlatListCard>
            <TitleFlatlist>
              {index} - {item.movie.title}
            </TitleFlatlist>
          </FlatListCard>
        )}
      </FlatlistContainer>
    );
  };

  const renderEndList = () => {
    if (isEndList) {
      return (
        <EndList>
          <EndListText>Não há mais filmes para carregar</EndListText>
        </EndList>
      );
    }
    return <ActivityIndicator size="large" color={"D65A31"} />;
  };

  const renderEmptyComponent = () => {
    return (
      <EmptyList>
        {loadingMovies ? (
          <Skeleton />
        ) : (
          <EmptyListText>Não há filmes para carregar</EmptyListText>
        )}
      </EmptyList>
    );
  };

  const renderKeyExtractor = (item: any, index: number) => {
    return loadingMovies
      ? item.toString()
      : item.movie.ids.slug + item.movie.ids.trakt;
  };

  return (
    <Container>
      {/* CABEÇALHO DO CONTEÚDO */}
      <SectionPrimary>
        <TitleSectionPrimary>Trending Movies</TitleSectionPrimary>
      </SectionPrimary>
      {/* LISTAS DE FILMES */}
      <SectionSecondary>
        <FlatList
          style={{}}
          contentContainerStyle={{}}
          data={loadingMovies ? FAKE_MOVIES : trending}
          renderItem={renderItem}
          keyExtractor={renderKeyExtractor}
          onEndReached={handlerLoadMorePopularMovies}
          onEndReachedThreshold={0.5}
          ListFooterComponent={trending.length !== 0 && renderEndList}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={renderEmptyComponent}
        />
      </SectionSecondary>
    </Container>
  );
};

// <TitleSectionPrimary> {item.title} </TitleSectionPrimary>
