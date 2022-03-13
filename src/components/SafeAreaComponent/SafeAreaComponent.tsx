import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
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
        backgroundColor: theme.PRIMARY_BACKGROUND_COLOR,
      }}
    >
      <StatusBar
        backgroundColor={theme.PRIMARY_BACKGROUND_COLOR}
        style={theme.mode === "light" ? "dark" : "light"}
      />
    </View>
  );
};

// this component is used to render the SafeAreaComponent on the app
