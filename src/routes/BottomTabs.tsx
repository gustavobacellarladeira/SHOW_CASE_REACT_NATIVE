import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { PopularScreen, MovieScreen } from "../screens";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { useTheme } from "styled-components";

const { Navigator, Screen } = createMaterialBottomTabNavigator();

export const BottomTabs = () => {
  const theme = useTheme();
  return (
    <Navigator
      barStyle={{ backgroundColor: theme.tabBottomBar.backgroundColor }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const iconColor = focused
            ? theme.tabBottomBar.focused
            : theme.tabBottomBar.inactive;

          if (route.name === "Popular") {
            return (
              <MaterialCommunityIcons
                name={"movie-edit"}
                size={24}
                color={iconColor}
              />
            );
          } else if (route.name === "Profile") {
            return <FontAwesome5 name={"user"} size={24} color={iconColor} />;
          }
        },
        tabBarInactiveTintColor: theme.tabBottomBar.inactive,
        tabBarActiveTintColor: theme.tabBottomBar.focused,
      })}
    >
      <Screen name="Popular" component={PopularScreen} />
      <Screen name="Profile" component={MovieScreen} />
    </Navigator>
  );
};
