import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { useThemeRedux } from "../../store/theme/hook";
import { Container, Title } from "./Styles";

export const MovieScreen = () => {
  const { useSwitchTheme } = useThemeRedux();

  return (
    <Container>
      <Button title="Change Theme" onPress={() => useSwitchTheme()} />
    </Container>
  );
};
