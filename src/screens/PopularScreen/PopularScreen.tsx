import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
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
  EndLisText,
  EndListText,
  FlatListCard,
  FlatlistContainer,
  ImageContainer,
  SectionPrimary,
  SectionSecondary,
  SkeletonContainer,
  TitleFlatlist,
  TitleFlatlistContainer,
  TitleSectionPrimary,
} from "./Styles";

import { Skeleton } from "../../components";
import { useMovies } from "../../store/movies/hook";
import { FAKE_MOVIES, LIMIT_MOVIES } from "../../constants/movies";
import { getImage } from "../../services/images/images";

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

  const renderItem = ({ item, index }) => {
    return (
      <FlatlistContainer>
        {loadingMovies ? (
          <Skeleton borderRadius={5} />
        ) : (
          <FlatListCard>
            <TitleFlatlist>
              {index} - {item.title}
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
    return loadingMovies ? item.toString() : item.ids.slug + item.ids.trakt;
  };

  return (
    <Container>
      {/* CABEÇALHO DO CONTEÚDO */}
      <SectionPrimary>
        <TitleSectionPrimary>Popular Movies</TitleSectionPrimary>
      </SectionPrimary>
      {/* LISTAS DE FILMES */}
      <SectionSecondary>
        <FlatList
          style={{}}
          contentContainerStyle={{}}
          data={loadingMovies ? FAKE_MOVIES : popular}
          renderItem={renderItem}
          keyExtractor={renderKeyExtractor}
          onEndReached={handlerLoadMorePopularMovies}
          onEndReachedThreshold={0.5}
          ListFooterComponent={popular.length !== 0 && renderEndList}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={renderEmptyComponent}
        />
      </SectionSecondary>
    </Container>
  );
};

// <TitleSectionPrimary> {item.title} </TitleSectionPrimary>
