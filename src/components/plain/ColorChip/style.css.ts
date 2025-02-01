import { resetStyle } from "@/styles/reset.css";
import { recipe } from "@vanilla-extract/recipes";
import * as colors from "@/constants/colors";
import { createVar } from "@vanilla-extract/css";
import { hexWithAlpha } from "@/utils/common";

export const colorVar = createVar();

const themeStyles = {
  primary: {
    vars: {
      [colorVar]: colors.blue[500],
    },
  },
  success: {
    vars: {
      [colorVar]: colors.green[500],
    },
  },
  error: {
    vars: {
      [colorVar]: colors.red[500],
    },
  },
  warning: {
    vars: {
      [colorVar]: colors.yellow[500],
    },
  },
  light: {
    vars: {
      [colorVar]: colors.white,
    },
  },
  dark: {
    vars: {
      [colorVar]: colors.gray[600],
    },
  },
};

const sizeStyles = {
  sm: {
    width: "8px",
    height: "8px",
  },
  md: {
    width: "10px",
    height: "10px",
  },
  lg: {
    width: "12px",
    height: "12px",
  },
};

export const colorChipStyles = recipe({
  base: [
    resetStyle,
    {
      display: "block",
      border: `1px solid ${hexWithAlpha(colors.gray[400], 40)}`,
      borderRadius: "50%",
      backgroundColor: colorVar,
    },
  ],
  variants: {
    theme: themeStyles,
    size: sizeStyles,
  },
  defaultVariants: {
    theme: "primary",
    size: "md",
  },
});
