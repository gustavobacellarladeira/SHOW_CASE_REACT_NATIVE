import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Routes } from "./src/routes/Routes";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import { SafeAreaComponent } from "./src/components";
import { Provider, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { store } from "./src/store";
import { useThemeRedux } from "./src/store/theme/hook";

export default function App() {
  const ThemeInjector = ({ children }: { children: React.ReactNode }) => {
    const { theme, setInitialTheme } = useThemeRedux();

    useEffect(() => {
      setInitialTheme();
      return () => {
        console.log("unmount");
        setInitialTheme();
      };
    }, []);

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  };

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Provider store={store}>
        <ThemeInjector>
          <SafeAreaComponent />
          <StatusBar style="auto" />
          <Routes />
        </ThemeInjector>
      </Provider>
    </SafeAreaProvider>
  );
}
