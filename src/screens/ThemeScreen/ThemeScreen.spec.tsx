import { fireEvent, render, waitFor } from "@testing-library/react-native";
import React from "react";
import { ThemeScreen } from "./ThemeScreen";

describe("ThemeScreen testing...", () => {
  it("should render the component correctly", async () => {
    render(<ThemeScreen />);
  });
});
