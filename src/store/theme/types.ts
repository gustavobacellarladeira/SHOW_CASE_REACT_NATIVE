import { ThemeProps } from "../../theme/types";

export interface ThemeHookProps {
  theme: ThemeProps;
  useSwitchTheme: () => void;
  setInitialTheme: () => void;
}
