import { resetStyle } from "@/styles/reset.css";
import { style } from "@vanilla-extract/css";

export const ratingStarStyles = style([
  resetStyle,
  {
    position: "relative",
  },
]);

export const ratingStarActiveStyles = style({
  position: "absolute",
  top: 0,
  left: 0,
});
