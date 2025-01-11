import { createGlobalTheme } from "@vanilla-extract/css";
import { gray, blue, red, yellow, green } from "../constants/colors";

export const vars = createGlobalTheme(":root", {
  color: {
    gray,
    blue,
    red,
    yellow,
    green,
  },
});
