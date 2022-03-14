import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const SectionPrimary = styled.View`
  height: 10%;
  background-color: ${(props) => props.theme.colors.primary};
  align-items: center;
  justify-content: center;
`;
export const TitleSectionPrimary = styled.Text`
  color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  font-size: ${(props) => props.theme.FONT_SIZE_TITLE};

  text-align: left;
`;

export const SectionSecondary = styled.View`
  background-color: ${(props) => props.theme.colors.secondary};
  flex: 1;
  flex-direction: row;
  padding: 20px;
  justify-content: space-between;
`;
