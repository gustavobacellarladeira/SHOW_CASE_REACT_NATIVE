import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { Screen1, Screen2 } from "../screens";

const { Navigator, Screen } = createMaterialBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <Navigator>
      <Screen name="Home" component={Screen1} />
      <Screen name="Settings" component={Screen2} />
    </Navigator>
  );
};
