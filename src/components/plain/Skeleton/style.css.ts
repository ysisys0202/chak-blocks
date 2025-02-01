import { gray } from "@/constants/colors";
import { resetStyle } from "@/styles/reset.css";
import { createVar, keyframes } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const widthVar = createVar();
export const heightVar = createVar();

const skeletonKeyframes = keyframes({
  "0%": {
    backgroundPosition: "100% 0;",
  },
  "100%": {
    backgroundPosition: "-100% 0",
  },
});

export const skeletonStyles = recipe({
  base: [
    resetStyle,
    {
      width: widthVar,
      height: heightVar,
    },
  ],
  variants: {
    variant: {
      outlined: {
        border: `1px solid ${gray[200]}`,
      },
      filled: {
        background: `linear-gradient(
            -75deg,
            ${gray[100]} 25%,
            ${gray[200]} 50%,
            ${gray[100]} 75%
          )`,
        backgroundSize: "200% 100%",
        animation: `${skeletonKeyframes} 1000ms linear infinite forwards`,
      },
    },
  },
  defaultVariants: {
    variant: "filled",
  },
});
