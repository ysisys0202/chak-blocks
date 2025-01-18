import { recipe } from "@vanilla-extract/recipes";
import * as colors from "@/constants/colors";
import { variantStyles as typographyVariantStyles } from "@/components/Typography/style.css";

const sizeStyles = {
  sm: {
    borderRadius: "4px",
    padding: "6px 8px",
    ...typographyVariantStyles.text2,
    "::placeholder": {
      ...typographyVariantStyles.text2,
    },
  },
  md: {
    borderRadius: "6px",
    padding: "8px",
    ...typographyVariantStyles.text1,
    "::placeholder": {
      ...typographyVariantStyles.text1,
    },
  },
  lg: {
    borderRadius: "8px",
    padding: "10px 8px",
    ...typographyVariantStyles.title5,
    fontWeight: "400 !important",
    "::placeholder": {
      ...typographyVariantStyles.title5,
    },
  },
};

const themeStyles = {
  primary: {
    borderColor: colors.gray[500],
  },
  active: {
    borderColor: colors.blue[500],
  },
  success: {
    borderColor: colors.green[500],
  },
  error: {
    borderColor: colors.red[500],
  },
  warning: {
    borderColor: colors.yellow[500],
  },
};

export const inputStyles = recipe({
  base: {
    boxSizing: "border-box",
    margin: 0,
    cursor: "pointer",
    border: "1px solid",
    outline: "none",
    transition: "border-color 100ms ease-in-out",
    color: colors.gray[800],
    ":hover": {
      borderColor: colors.blue[200],
    },
    ":focus": {
      borderColor: colors.blue[500],
    },
  },
  variants: {
    theme: themeStyles,
    size: sizeStyles,
  },
  defaultVariants: {
    size: "md",
    theme: "primary",
  },
});
