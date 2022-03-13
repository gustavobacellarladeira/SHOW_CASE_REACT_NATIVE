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
  height: 30%;
  background-color: ${(props) => props.theme.PRIMARY_BACKGROUND_COLOR};
`;
export const SectionSecondary = styled.View`
  width: 100%;
  flex: 1;
  min-height: 160px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: space-around;
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
export const FlatlistCard = styled.View`
  background-color: white;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
export const TitleFlatlistContainer = styled.View`
  align-items: flex-start;
  margin: 10px;
  width: 45%;
  height: 20px;
`;
