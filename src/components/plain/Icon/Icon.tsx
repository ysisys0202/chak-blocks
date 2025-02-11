import React, { forwardRef, SVGAttributes } from "react";
import { svgs } from "./index";
import { gray } from "@/constants/colors";
export type IconProps = {
  name:
    | "arrow"
    | "book"
    | "chevron"
    | "infomation"
    | "warning"
    | "star-filled"
    | "check"
    | "warning-triangle"
    | "heart"
    | "heart-filled"
    | "close"
    | "logout"
    | "setting"
    | "picture"
    | "pin"
    | "edit-rectangle";

  size?: number;
  color?: string;
} & SVGAttributes<SVGSVGElement>;

export type SvgrComponent = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string;
    titleId?: string;
    desc?: string;
    descId?: string;
  }
>;

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ name, size = 24, color = gray[800], ...props }, ref) => {
    if (!svgs[name]) {
      console.error(`${name} 아이콘이 존재하지 않습니다.`);
    }
    const Icon = svgs[name];

    return (
      <Icon
        width={size}
        height={size}
        stroke={color}
        fill={color}
        ref={ref}
        {...props}
      />
    );
  }
);

export default Icon;
