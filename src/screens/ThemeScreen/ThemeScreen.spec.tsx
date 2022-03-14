import { store } from "../../store/store";
import React from "react";
import { Provider } from "react-redux";
import { ThemeScreen } from "./ThemeScreen";
import { render } from "@testing-library/react-native";
import { ThemeProvider, DefaultTheme } from "styled-components";

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

describe("ThemeScreen testing...", () => {
  it("renders correctly", () => {
    rendererWithRedux(<ThemeScreen />);
  });

  it("isEnabled correctly", () => {
    const { getByTestId } = rendererWithRedux(<ThemeScreen />);
    const isEnabled = getByTestId("isEnabled");
    expect(isEnabled).toBeTruthy();
  });

  //   it("isEnabled true or false", () => {
  //     const isEnabledElement = tree.findByProps({ testeId: "isEnabled" }).props.value;
  //     expect(tree.findByProps({testeId: "isEnabled"}).children).toEqual(true);
  //     expect(isEnabledElement).
  //   });
});
