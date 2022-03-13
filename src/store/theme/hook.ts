import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { lightTheme, darkTheme } from "../../theme/";

export const useThemeRedux = () => {
  const theme = useSelector((state: any) => state.theme);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Currently theme:", theme.theme.mode);
  }, [theme]);

  const useSwitchTheme = () => {
    if (theme.theme.mode === "light") {
      dispatch({ type: "SWITCH_THEME", payload: darkTheme });
    } else {
      dispatch({ type: "SWITCH_THEME", payload: lightTheme });
    }
  };

  return { theme, useSwitchTheme };
};
