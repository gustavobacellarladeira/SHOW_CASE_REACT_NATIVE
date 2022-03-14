import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${(props: { theme: { colors: { primary: any } } }) =>
    props.theme.colors?.primary || "#000"};
`;

export const SectionPrimary = styled.View`
  height: 10%;
  background-color: ${(props: { theme: { colors: { primary: any } } }) =>
    props?.theme.colors?.primary || "#000"};
  align-items: center;
  justify-content: center;
`;
export const TitleSectionPrimary = styled.Text`
  color: ${(props: { theme: { PRIMARY_TEXT_COLOR: any } }) =>
    props.theme?.PRIMARY_TEXT_COLOR || "#fff"};
  font-size: ${(props: { theme: { FONT_SIZE_TITLE: any } }) =>
    props.theme?.FONT_SIZE_TITLE || "20px"};
  text-align: left;
`;

export const SectionSecondary = styled.View`
  background-color: ${(props: { theme: { colors: { secondary: any } } }) =>
    props.theme.colors?.secondary || "#000"};
  flex: 1;
  flex-direction: row;
  padding: 20px;
  justify-content: space-between;
`;
