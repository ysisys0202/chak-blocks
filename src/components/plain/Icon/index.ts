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
import logout from "./svgs/logout.svg?react";
import setting from "./svgs/setting.svg?react";
import editRectangle from "./svgs/edit-rectangle.svg?react";
import pin from "./svgs/pin.svg?react";
import picture from "./svgs/picture.svg?react";
import home from "./svgs/home.svg?react";

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
  logout,
  setting,
  pin,
  "edit-rectangle": editRectangle,
  picture,
  home,
};
