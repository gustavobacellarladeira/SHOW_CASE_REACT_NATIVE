import { StatusBar } from "expo-status-bar";
import React from "react";
import { Routes } from "./src/routes/Routes";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import { SafeAreaComponent } from "./src/components";
import { Provider } from "react-redux";
import { store } from "./src/store";

export default function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Provider store={store}>
        <SafeAreaComponent />
        <StatusBar style="auto" />
        <Routes />
      </Provider>
    </SafeAreaProvider>
  );
}
