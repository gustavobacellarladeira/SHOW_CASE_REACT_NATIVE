import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { HomeScreen, MovieScreen } from "../screens";

const { Navigator, Screen } = createMaterialBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <Navigator>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Settings" component={MovieScreen} />
    </Navigator>
  );
};
