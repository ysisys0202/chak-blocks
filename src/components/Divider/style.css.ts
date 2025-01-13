import { createVar, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import * as colors from "@/constants/colors";

export const backgroundColorVar = createVar();
export const sizeVar = createVar();

const directionStyles = {
  horizontal: {
    width: "100%",
    height: sizeVar,
  },
  vertical: style({
    width: sizeVar,
    height: "100%",
  }),
};

const themeStyles = {
  primary: style({
    vars: {
      [backgroundColorVar]: colors.gray[800],
    },
  }),

  secondary: style({
    vars: {
      [backgroundColorVar]: colors.gray[700],
    },
  }),

  tertiary: style({
    vars: {
      [backgroundColorVar]: colors.gray[600],
    },
  }),

  info: style({
    vars: {
      [backgroundColorVar]: colors.blue[500],
    },
  }),

  success: style({
    vars: {
      [backgroundColorVar]: colors.green[500],
    },
  }),

  error: style({
    vars: {
      [backgroundColorVar]: colors.red[500],
    },
  }),

  warning: style({
    vars: {
      [backgroundColorVar]: colors.yellow[500],
    },
  }),

  light: style({
    vars: {
      [backgroundColorVar]: colors.white,
    },
  }),
};

export const dividerStyles = recipe({
  base: {
    margin: 0,
    padding: 0,
    border: "none",
    background: backgroundColorVar,
  },
  variants: {
    direction: directionStyles,
    theme: themeStyles,
  },
  defaultVariants: {
    direction: "horizontal",
    theme: "tertiary",
  },
});
