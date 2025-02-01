import { recipe } from "@vanilla-extract/recipes";
import * as colors from "@/constants/colors";
import { variantStyles as typographyVariantStyles } from "@/components/plain/Typography/style.css";

const sizeStyles = {
  sm: {
    borderRadius: "4px",
    padding: "4px 8px",
    ...typographyVariantStyles.text2,
  },
  md: {
    borderRadius: "6px",
    padding: "6px 14px",
    ...typographyVariantStyles.text1,
  },
  lg: {
    borderRadius: "8px",
    padding: "8px 16px",
    ...typographyVariantStyles.title5,
  },
};

const themeStyles = {
  primary: {
    backgroundColor: colors.blue[500],
    borderColor: colors.blue[500],
    color: colors.blue[500],
  },
  success: {
    backgroundColor: colors.green[500],
    borderColor: colors.green[500],
    color: colors.green[500],
  },
  error: {
    backgroundColor: colors.red[500],
    borderColor: colors.red[500],
    color: colors.red[500],
  },
  warning: {
    backgroundColor: colors.yellow[500],
    borderColor: colors.yellow[500],
    color: colors.yellow[500],
  },
  light: {
    backgroundColor: colors.white,
    borderColor: colors.white,
    color: colors.white,
  },
  dark: {
    backgroundColor: colors.gray[600],
    borderColor: colors.gray[600],
    color: colors.gray[600],
  },
};

const variantStyles = {
  outlined: {
    backgroundColor: "transparent",
  },
  contained: {
    color: colors.white,
  },
  text: {
    border: "none",
    backgroundColor: "transparent",
  },
};

export const buttonStyles = recipe({
  base: {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
    cursor: "pointer",
    border: "1px solid",
    outline: "none",
    borderWidth: 1,
    transition: "opacity 100ms ease-in-out",

    ":hover": {
      opacity: 0.8,
    },
  },
  variants: {
    size: sizeStyles,
    theme: themeStyles,
    variant: variantStyles,
  },
  compoundVariants: [
    {
      variants: {
        variant: "contained",
        theme: "light",
      },
      style: {
        color: colors.gray[500],
      },
    },
  ],
  defaultVariants: {
    size: "md",
    theme: "primary",
    variant: "contained",
  },
});
