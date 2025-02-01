import { recipe } from "@vanilla-extract/recipes";
import * as colors from "@/constants/colors";
import { variantStyles as typographyVariantStyles } from "@/components/plain/Typography/style.css";

const sizeStyles = {
  sm: {
    padding: "2px 4px",
    ...typographyVariantStyles.text3,
  },
  md: {
    padding: "2px 8px",
    ...typographyVariantStyles.text2,
  },
  lg: {
    padding: "4px 10px",
    ...typographyVariantStyles.text1,
  },
};

const themeStyles = {
  primary: {
    backgroundColor: colors.blue[100],
    borderColor: colors.blue[300],
    color: colors.blue[500],
  },
  success: {
    backgroundColor: colors.green[100],
    borderColor: colors.green[300],
    color: colors.green[500],
  },
  error: {
    backgroundColor: colors.red[100],
    borderColor: colors.red[300],
    color: colors.red[500],
  },
  warning: {
    backgroundColor: colors.yellow[100],
    borderColor: colors.yellow[300],
    color: colors.yellow[500],
  },
  light: {
    backgroundColor: colors.white,
    borderColor: colors.gray[300],
    color: colors.gray[600],
  },
  dark: {
    backgroundColor: colors.gray[400],
    borderColor: colors.gray[800],
    color: colors.white,
  },
};

const variantStyles = {
  outlined: {},
  contained: {
    borderColor: "transparent",
  },
};

export const tagStyles = recipe({
  base: {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
    border: "1px solid",
    outline: "none",
    borderRadius: "4px",
  },
  variants: {
    size: sizeStyles,
    theme: themeStyles,
    variant: variantStyles,
  },
  defaultVariants: {
    size: "md",
    theme: "primary",
    variant: "contained",
  },
});
