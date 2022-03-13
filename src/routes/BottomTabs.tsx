import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { PopularScreen, TrendingScreen } from "../screens";

const { Navigator, Screen } = createMaterialBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <Navigator>
      <Screen name="Popular" component={PopularScreen} />
      <Screen name="Trending" component={TrendingScreen} />
    </Navigator>
  );
};
