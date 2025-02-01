import * as colors from "@/constants/colors";
import { resetStyle } from "@/styles/reset.css";
import { createVar, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { variantStyles as typographyVariantStyles } from "@/components/plain/Typography/style.css";

export const accordionContentHeightVar = createVar();

export const accordionStyle = style([resetStyle]);

export const accordionItemStyle = style([
  resetStyle,
  {
    borderTop: `1px solid ${colors.gray[200]}`,
    ":last-of-type": {
      borderBottom: `1px solid ${colors.gray[200]}`,
    },
  },
]);

export const accordionButtonStyles = recipe({
  base: [
    {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      backgroundColor: colors.white,
      cursor: "pointer",
    },
    resetStyle,
  ],
  variants: {
    size: {
      sm: {
        padding: "6px 8px",
      },
      md: {
        padding: "10px 12px",
      },
      lg: {
        padding: "12px 16px",
      },
    },
  },
});

export const accordionLabelStyles = recipe({
  base: [
    resetStyle,
    {
      color: colors.gray[800],
    },
  ],

  variants: {
    size: {
      sm: {
        ...typographyVariantStyles.text1,
      },
      md: {
        ...typographyVariantStyles.text1,
      },
      lg: {
        ...typographyVariantStyles.title5,
      },
    },
  },
});

export const accordionIconStyles = recipe({
  base: {
    transition: "transform 100ms ease-in-out",
  },
  variants: {
    isActive: {
      true: {
        transform: "rotate(-180deg)",
      },
    },
  },
});

export const accordionContentStyles = recipe({
  base: [
    resetStyle,
    {
      overflow: "hidden",
      height: accordionContentHeightVar,
      transition: "height 100ms ease-in-out",
      color: colors.gray[600],
    },
  ],
  variants: {
    size: {
      sm: {
        ...typographyVariantStyles.text1,
        ".content-inner": {
          padding: "6px 8px",
        },
      },
      md: {
        ...typographyVariantStyles.text1,
        ".content-inner": {
          padding: "8px 12px",
        },
      },
      lg: {
        ...typographyVariantStyles.title5,
        ".content-inner": {
          padding: "10px 16px",
        },
      },
    },
  },
});
