import styled from "styled-components/native";

const DEFAULT_COLOR = "#000";
const DEFAULT_FONTSIZE = "20px";

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
  height: 10%;
  background-color: ${(props) => props.theme.colors?.primary || DEFAULT_COLOR};
  align-items: center;

  justify-content: center;
`;
export const TitleSectionPrimary = styled.Text`
  color: ${(props) => props.theme?.PRIMARY_TEXT_COLOR || DEFAULT_COLOR};
  font-size: ${(props) => props.theme?.FONT_SIZE_TITLE || DEFAULT_FONTSIZE};

  text-align: left;
`;
export const SectionSecondary = styled.View`
  background-color: ${(props) =>
    props.theme.colors?.secondary || DEFAULT_COLOR};
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
  padding: 10px;
  width: 100%;
`;

export const FlatListCard = styled.View`
  background-color: ${(props) => props.theme.colors?.primary || DEFAULT_COLOR};
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

export const TitleFlatlistContainer = styled.View`
  width: 60%;
  align-items: center;
  background-color: ${(props) => props.theme.colors?.primary || DEFAULT_COLOR};
  padding-top: 10px;
  border-radius: 10px;
`;
export const TitleFlatlist = styled.Text`
  color: ${(props) => props.theme?.PRIMARY_TEXT_COLOR || DEFAULT_COLOR};
  font-size: ${(props) => props.theme?.FONT_SIZE_TITLE || DEFAULT_FONTSIZE};

  text-align: left;
`;

export const ImageContainer = styled.View`
  background-color: ${(props) => props.theme.colors?.primary || DEFAULT_COLOR};
  border-radius: 10px;
  width: 40%;
`;
export const EndList = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors?.tertiary || DEFAULT_COLOR};
  padding: 30px;
`;
export const EndListText = styled.Text`
  color: ${(props) => props.theme.colors?.primary || DEFAULT_COLOR};
  font-size: ${(props) => props.theme.fonts?.size || DEFAULT_FONTSIZE};
  text-align: center;
`;

export const EmptyList = styled.View`
  min-height: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.theme.colors?.secondary || DEFAULT_COLOR};
  padding: 30px;
`;

export const EmptyListText = styled.Text`
  color: ${(props) => props.theme?.PRIMARY_TEXT_COLOR || DEFAULT_COLOR};

  font-size: ${(props) => props.theme.fonts?.size || DEFAULT_FONTSIZE};
  text-align: center;
`;
