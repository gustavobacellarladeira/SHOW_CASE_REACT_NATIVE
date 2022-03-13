import React from "react";
import { FlatList } from "react-native";
import { Skeleton } from "..";
import {
  Container,
  ContainerSection,
  FlatlistCard,
  SectionPrimary,
  SectionSecondary,
  SkeletonContainer,
  TitleFlatlistContainer,
} from "./Styles";

export const SkeletonMovieScreen: React.FC = () => {
  const skeletonList = () => {
    return (
      <SectionSecondary>
        <TitleFlatlistContainer>
          <Skeleton borderRadius={10} />
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
                <Skeleton borderRadius={10} />
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
        <Skeleton />
      </SectionPrimary>
      {/* LISTAS DE FILMES */}
      <ContainerSection>
        {skeletonList()}
        {skeletonList()}
      </ContainerSection>
    </Container>
  );
};
