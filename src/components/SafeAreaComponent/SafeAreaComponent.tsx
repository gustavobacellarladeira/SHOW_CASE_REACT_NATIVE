import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const SafeAreaComponent = () => {
  const insets = useSafeAreaInsets();

  return <View style={{ paddingTop: insets.top }} />;
};

// this component is used to render the SafeAreaComponent on the app
