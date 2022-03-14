import React from "react";
import { View, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "styled-components";
import type { ThemeProps } from "../../theme/types";

export const SafeAreaComponent = () => {
  const insets = useSafeAreaInsets();
  const theme = useTheme() as ThemeProps;

  return (
    <View
      style={{
        paddingTop: insets.top,
        backgroundColor: theme.colors.primary,
      }}
    >
      <StatusBar
        backgroundColor={theme.colors.primary}
        barStyle={theme.mode === "light" ? "dark-content" : "light-content"}
      />
    </View>
  );
};

// this component is used to render the SafeAreaComponent on the app
