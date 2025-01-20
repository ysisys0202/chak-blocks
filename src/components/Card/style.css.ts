import { createVar } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { white } from "@/constants/colors";
import { shadow } from "@/constants/shadow";
import { resetStyle } from "@/styles/reset.css";

export const colorVar = createVar();
export const borderColorVar = createVar();

const variantStyles = {
  elevated: {
    boxShadow: shadow.primary,
  },
  filled: {
    backgroundColor: colorVar,
  },
  outlined: {
    border: `1px solid`,
    borderColor: borderColorVar,
  },
};

export const cardStyles = recipe({
  base: [
    resetStyle,
    {
      padding: "16px 24px",
      backgroundColor: white,
    },
  ],

  variants: {
    variant: variantStyles,
    rounded: {
      true: {
        borderRadius: "8px",
      },
    },
  },
  defaultVariants: {
    variant: "elevated",
    rounded: true,
  },
});
