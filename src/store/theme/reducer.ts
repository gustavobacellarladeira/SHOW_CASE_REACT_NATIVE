import { lightTheme } from "../../theme/light";
import { SWITCH_THEME } from "./action";

const INITIAL_STATE = {
  theme: lightTheme,
};

export const themeReducer = (
  state = INITIAL_STATE,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case SWITCH_THEME:
      return { theme: action.payload };
    default:
      return state;
  }
};
