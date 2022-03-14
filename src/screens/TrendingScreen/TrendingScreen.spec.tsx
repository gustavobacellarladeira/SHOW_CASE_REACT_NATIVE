import { store } from "../../store/store";
import React from "react";
import { Provider } from "react-redux";
import { render, fireEvent, act } from "@testing-library/react-native";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { TrendingScreen } from "./TrendingScreen";
import { useMovies } from "../../store/movies/hook";

const MOCK_THEME: DefaultTheme = {
  mode: "dark",
  PRIMARY_BACKGROUND_COLOR: "#333333",
  PRIMARY_TEXT_COLOR: "#ffffff",
  FONT_SIZE_TITLE: "20px",
  fonts: {
    color: "#ffffff",
    size: "20px",
  },
  colors: {
    primary: "#222831",
    secondary: "#393E46",
    tertiary: "#D65A31",
  },

  tabBottomBar: {
    backgroundColor: "#333",
    focused: "#D65A31",
    inactive: "#ffffff",
  },
};

const rendererWithRedux = (component: any) => {
  return render(
    <Provider store={store}>
      <ThemeProvider theme={MOCK_THEME}>{component}</ThemeProvider>
    </Provider>
  );
};

describe("TrendingScreen testing...", () => {
  it("renders correctly", () => {
    const tree = rendererWithRedux(<TrendingScreen />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
