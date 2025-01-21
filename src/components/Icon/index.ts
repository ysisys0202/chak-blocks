export * from "./Icon";

import { IconProps, SvgrComponent } from "./Icon";
import arrow from "./svgs/arrow.svg?react";
import book from "./svgs/book.svg?react";
import chevron from "./svgs/chevron.svg?react";
import infomation from "./svgs/infomation.svg?react";
import warning from "./svgs/warning.svg?react";
import starFilled from "./svgs/star-filled.svg?react";
import check from "./svgs/check.svg?react";
import warningTriangle from "./svgs/warning-triangle.svg?react";
import heart from "./svgs/heart.svg?react";
import heartFilled from "./svgs/heart-filled.svg?react";
import close from "./svgs/close.svg?react";

export const svgs: { [key in IconProps["name"]]: SvgrComponent } = {
  arrow,
  book,
  chevron,
  infomation,
  warning,
  "star-filled": starFilled,
  check,
  "warning-triangle": warningTriangle,
  heart,
  "heart-filled": heartFilled,
  close,
};
