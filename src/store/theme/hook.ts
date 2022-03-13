import { useColorScheme } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { lightTheme, darkTheme } from "../../theme/";
import { ThemeHookProps } from "./types";

export const useThemeRedux = () => {
  const theme = useSelector((state: any) => state.theme);
  const dispatch = useDispatch();
  const deviceTheme = useColorScheme();

  const setInitialTheme = () => {
    const themeToUse = deviceTheme === "dark" ? darkTheme : lightTheme;
    dispatch({ type: "SET_THEME", payload: themeToUse });
  };

  const useSwitchTheme = () => {
    if (theme.mode === "light") {
      dispatch({ type: "SWITCH_THEME", payload: darkTheme });
    } else {
      dispatch({ type: "SWITCH_THEME", payload: lightTheme });
    }
  };

  return { theme, useSwitchTheme, setInitialTheme } as ThemeHookProps;
};
