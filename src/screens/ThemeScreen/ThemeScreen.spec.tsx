import { fireEvent, render, waitFor } from "@testing-library/react-native";
import React from "react";
import { ThemeScreen } from "./ThemeScreen";

describe("ThemeScreen testing...", () => {
  it("should render the component correctly", async () => {
    render(<ThemeScreen />);
  });

  //   it("adds 1 + 2 to equal 3", () => {
  //     expect(sum(1, 2)).toBe(3);
  //   });
});
function sum(arg0: number, arg1: number): any {
  return arg0 + arg1;
}
