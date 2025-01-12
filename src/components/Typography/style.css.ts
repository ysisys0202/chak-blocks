import { createVar, style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import * as colors from "@/constants/colors";

export const textColor = createVar();

const titleBase = {
  fontWeight: 500,
  lineHeight: 1.2,
};

const textBase = {
  fontWeight: 400,
  lineHeight: 1.4,
};

export const variantStyles = {
  title1: { fontSize: 38, ...titleBase },
  title2: { fontSize: 30, ...titleBase },
  title3: { fontSize: 28, ...titleBase },
  title4: { fontSize: 24, ...titleBase },
  title5: { fontSize: 20, ...titleBase },
  text1: { fontSize: 16, ...textBase },
  text2: { fontSize: 14, ...textBase },
  text3: { fontSize: 13, ...textBase },
};

const themeStyles = {
  primary: [
    style({
      vars: {
        [textColor]: colors.gray[800],
      },
    }),
  ],
  secondary: [
    style({
      vars: {
        [textColor]: colors.gray[700],
      },
    }),
  ],
  tertiary: [
    style({
      vars: {
        [textColor]: colors.gray[600],
      },
    }),
  ],
  info: [
    style({
      vars: {
        [textColor]: colors.blue[500],
      },
    }),
  ],
  success: [
    style({
      vars: {
        [textColor]: colors.green[500],
      },
    }),
  ],
  error: [
    style({
      vars: {
        [textColor]: colors.red[500],
      },
    }),
  ],
  warning: [
    style({
      vars: {
        [textColor]: colors.yellow[500],
      },
    }),
  ],
  light: [
    style({
      vars: {
        [textColor]: colors.white,
      },
    }),
  ],
};

export const decorationStyles = styleVariants({
  mark: {
    padding: "0 2px",
    backgroundColor: colors.yellow[200],
  },
  del: {
    textDecoration: "line-through",
  },
  strong: {
    fontWeight: 700,
  },
  italic: {
    fontStyle: "italic",
  },
});

export const typographyStyles = recipe({
  base: {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontWeight: 400,
    color: textColor,
  },
  variants: {
    variant: variantStyles,
    theme: themeStyles,
    mark: {
      padding: "0 2px",
      backgroundColor: colors.yellow[200],
    },
  },
});
