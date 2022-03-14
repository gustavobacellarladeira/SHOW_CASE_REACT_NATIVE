import { store } from "../../store/store";
import React from "react";
import { Provider } from "react-redux";
import { ThemeScreen } from "./ThemeScreen";
import { render, fireEvent } from "@testing-library/react-native";
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
    const tree = rendererWithRedux(<ThemeScreen />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("isEnabled correctly", () => {
    const { getByTestId } = rendererWithRedux(<ThemeScreen />);
    const isEnabledComp = getByTestId("isEnabled");
    expect(isEnabledComp).toBeTruthy();
  });

  it("Switch has to change isEnable", () => {
    const { getByTestId } = rendererWithRedux(<ThemeScreen />);
    const switchComp = getByTestId("switchTheme");
    console.log("switchComp VALUE-->", switchComp.props.value);
    // testar o switch ativando a função da props dele switchComp.props.onChange e verificar se o valor do isEnabledComp mudou
    fireEvent.press(switchComp);
    const isEnabledComp = getByTestId("isEnabled");
    expect(isEnabledComp).toBeTruthy();
  });
});
