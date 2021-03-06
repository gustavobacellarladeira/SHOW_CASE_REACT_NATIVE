import React, { useState } from "react";
import { Switch, Text } from "react-native";
import { useTheme } from "styled-components";
import { useThemeRedux } from "../../store/theme/hook";
import {
  Container,
  SectionPrimary,
  SectionSecondary,
  TitleSectionPrimary,
} from "./Styles";

export const ThemeScreen = () => {
  const theme = useTheme();
  const { useSwitchTheme } = useThemeRedux();
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const toggleSwitch = () => {
    useSwitchTheme();
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <Container>
      <SectionPrimary>
        <TitleSectionPrimary>Popular Movies</TitleSectionPrimary>
      </SectionPrimary>

      <SectionSecondary>
        <TitleSectionPrimary>Change Theme</TitleSectionPrimary>

        <Text testID="isEnabled">{isEnabled}</Text>
        <Switch
          testID="switchTheme"
          trackColor={{
            false: theme.colors.primary,
            true: theme.colors.primary,
          }}
          thumbColor={isEnabled ? theme.colors.tertiary : theme.colors.primary}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </SectionSecondary>
    </Container>
  );
};
