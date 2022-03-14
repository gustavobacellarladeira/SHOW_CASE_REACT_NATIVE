// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    mode: string;
    PRIMARY_BACKGROUND_COLOR: string;
    PRIMARY_TEXT_COLOR: string;
    FONT_SIZE_TITLE: string;
    fonts: {
      color: string;
      size: string;
    };
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    tabBottomBar: {
      backgroundColor: string;
      focused: string;
      inactive: string;
    };
  }
}
