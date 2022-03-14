import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { PopularScreen, ThemeScreen, TrendingScreen } from "../screens";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import { useTheme } from "styled-components";

const { Navigator, Screen } = createMaterialBottomTabNavigator();

export const BottomTabs = () => {
  const theme = useTheme();
  return (
    <Navigator
      barStyle={{ backgroundColor: theme.tabBottomBar.backgroundColor }}
      activeColor={theme.tabBottomBar.focused}
      inactiveColor={theme.tabBottomBar.inactive}
    >
      <Screen
        name="Popular"
        component={PopularScreen}
        options={{
          tabBarLabel: "Popular",
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <MaterialCommunityIcons
                name={"movie-edit"}
                size={24}
                color={color}
              />
            );
          },
        }}
      />
      <Screen
        name="Trending"
        component={TrendingScreen}
        options={{
          tabBarLabel: "Trending",
          tabBarIcon: ({ focused, color, size }) => {
            return <MaterialIcons name="trending-up" size={24} color={color} />;
          },
        }}
      />
      <Screen
        name="Theme"
        component={ThemeScreen}
        options={{
          tabBarLabel: "Theme",
          tabBarIcon: ({ focused, color, size }) => {
            return <FontAwesome5 name={"user"} size={24} color={color} />;
          },
        }}
      />
    </Navigator>
  );
};
