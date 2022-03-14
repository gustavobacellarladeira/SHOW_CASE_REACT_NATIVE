import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  globals: {
    "ts-jest": {
      babelConfig: true,
    },
  },
};
export default config;
