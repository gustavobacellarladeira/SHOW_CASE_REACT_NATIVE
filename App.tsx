import { StatusBar } from "expo-status-bar";
import React from "react";
import { Routes } from "./src/routes/Routes";
import { useColorScheme } from "react-native";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import { SafeAreaComponent } from "./src/components";
import { Provider, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { store } from "./src/store";

import { darkTheme, lightTheme } from "./src/theme";
export default function App() {
  // const ThemeInjector = ({ children }: { children: React.ReactNode }) => {
  //   const theme = useSelector((state: any) => state.theme);

  //   return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
  // };

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Provider store={store}>
        {/* <ThemeInjector> */}
        <SafeAreaComponent />
        <StatusBar style="auto" />
        <Routes />
        {/* </ThemeInjector> */}
      </Provider>
    </SafeAreaProvider>
  );
}
