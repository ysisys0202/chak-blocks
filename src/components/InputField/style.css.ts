import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const self = recipe({
  base: {
    display: "flex",
  },
  variants: {
    direction: {
      horizontal: {
        alignItems: "flex-start",
        gap: 40,
      },
      vertical: {
        flexDirection: "column",
        gap: 8,
      },
    },
  },
  defaultVariants: {
    direction: "vertical",
  },
});

export const inputFieldStyles = {
  self,
  label: recipe({
    base: { display: "flex", gap: 4 },
    variants: {
      direction: {
        horizontal: {
          marginTop: "6px",
        },
        vertical: {},
      },
    },
  }),
  inputArea: style({
    position: "relative",
  }),
  textArea: style({
    position: "absolute",
    bottom: 0,
    left: 0,
    transform: "translateY(calc(100% + 8px))",
  }),
};
