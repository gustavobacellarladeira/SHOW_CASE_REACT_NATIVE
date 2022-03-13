import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  width: 100%;
`;

export const ContainerSection = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;
export const SectionPrimary = styled.View`
  height: 15%;
  background-color: ${(props) => props.theme.colors.primary};
  align-items: center;
  padding-top: 20px;
  padding-horizontal: 20px;
`;
export const TitleSectionPrimary = styled.Text`
  color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  font-size: ${(props) => props.theme.FONT_SIZE_TITLE};

  text-align: left;
`;
export const SectionSecondary = styled.View`
  background-color: ${(props) => props.theme.colors.secondary};
  flex: 1;
`;
export const SkeletonContainer = styled.View`
  flex: 1;
  margin-horizontal: 10px;
  min-width: 140px;
  min-height: 160px;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
export const FlatlistContainer = styled.View`
  min-width: 100%;
  min-height: 45px;
  padding: 10px;
`;
export const TitleFlatlistContainer = styled.View`
  align-items: flex-start;
  margin: 10px;
  width: 45%;
  height: 20px;
`;
