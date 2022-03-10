import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { Routes } from "./src/routes/Routes";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import { SafeAreaComponent } from "./src/components";

export default function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <SafeAreaComponent />
      <StatusBar style="auto" />
      <Routes />
    </SafeAreaProvider>
  );
}
