import { createVar, style, styleVariants } from "@vanilla-extract/css";
import * as colors from "@/constants/colors";

export const textColor = createVar();

const typographyBase = style({
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
  fontWeight: 400,
  color: textColor,
});

const titleBase = style({
  fontWeight: 500,
  lineHeight: 1.2,
});

const textBase = style({
  fontWeight: 400,
  lineHeight: 1.4,
});

export const typography = styleVariants({
  title1: [titleBase, style({ fontSize: 38 })],
  title2: [titleBase, style({ fontSize: 30 })],
  title3: [titleBase, style({ fontSize: 28 })],
  title4: [titleBase, style({ fontSize: 24 })],
  title5: [titleBase, style({ fontSize: 20 })],
  text1: [textBase, style({ fontSize: 16 })],
  text2: [textBase, style({ fontSize: 14 })],
  text3: [textBase, style({ fontSize: 13 })],
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

export default typographyBase;
