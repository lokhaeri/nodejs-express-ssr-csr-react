import { DefaultTheme } from "react-atomize";

export const mainTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    brand800: "#671de1"
  },
  rounded: {
    ...DefaultTheme.rounded,
    brandRadius: "20px"
  },
  textSize: {
    size: {
      customSize: "25px"
    },
    height: {
      customSize: "34px"
    }
  }
};
