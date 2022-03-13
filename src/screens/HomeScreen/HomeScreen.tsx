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
import { Skeleton } from "../../components";

import { ThemeProvider } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { switchTheme } from "../../redux/themeActions";
import { lightTheme, darkTheme } from "../../theme";
import { useThemeRedux } from "../../store/theme/hook";

export const HomeScreen = () => {
  const { theme, useSwitchTheme } = useThemeRedux();
  // const theme = useSelector((state: any) => state.themeReducer.theme);
  // const dispatch = useDispatch();

  // const setTheme = () => {
  //   const currentlyTheme = theme.mode;
  //   console.log("currentlyTheme", currentlyTheme);

  //   if (currentlyTheme === "light") {
  //     dispatch(switchTheme(darkTheme));
  //   }
  //   if (currentlyTheme === "dark") {
  //     dispatch(switchTheme(lightTheme));
  //   }
  // };

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
      </SectionPrimary>
      {/* LISTAS DE FILMES */}
      <ContainerSection>
        {skeletonList()}
        {skeletonList()}
      </ContainerSection>
    </Container>
  );
};
