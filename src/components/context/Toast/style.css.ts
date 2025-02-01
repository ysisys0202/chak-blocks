import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { resetStyle } from "@/styles/reset.css";
import * as colors from "@/constants/colors";
import { shadow } from "@/constants/shadow";
import { hexWithAlpha } from "@/utils/common";

const statusStyles = {
  info: {
    backgroundColor: colors.blue[400],
  },
  success: {
    backgroundColor: colors.green[400],
  },
  warning: {
    backgroundColor: colors.yellow[400],
  },
  error: {
    backgroundColor: colors.red[400],
  },
};

export const toastStyles = recipe({
  base: [
    resetStyle,
    {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 20,
      position: "relative",
      padding: "20px 40px 20px 16px",
      maxWidth: "460px",
      borderRadius: 8,
      boxShadow: shadow.primary,
      pointerEvents: "all",
    },
  ],
  variants: {
    status: statusStyles,
  },
});

export const toastIconStyle = style({
  flexShrink: 0,
});

export const toastDescriptionStyle = style({
  marginTop: 8,
});

export const toastCloseButtonStyle = style({
  position: "absolute",
  top: 8,
  right: 0,
});

export const toastContainerStyle = style([
  resetStyle,
  {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 900,
    padding: "80px",
    width: "100%",
    height: "100dvh",
    pointerEvents: "none",
  },
]);
