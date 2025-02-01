import React, { ElementType, forwardRef, HTMLAttributes } from "react";
import { gray, yellow } from "@/constants/colors";
import Icon from "@/components/plain/Icon/Icon";
import { combineClassNames } from "@/utils/common";
import { ratingStarStyles, ratingStarActiveStyles } from "./style.css";

export type RatingStarProps = {
  value: number;
  size?: "sm" | "md" | "lg";
  as?: ElementType;
} & HTMLAttributes<HTMLElement>;

export const defaultRatingStarProps = {
  size: "md" as Exclude<RatingStarProps["size"], undefined>,
  as: "div",
};

export const sizeMap = new Map([
  ["sm", 20],
  ["md", 22],
  ["lg", 24],
]);

export const RatingStar = forwardRef<HTMLElement, RatingStarProps>(
  (
    {
      value,
      size = defaultRatingStarProps.size,
      className,
      as: Component = defaultRatingStarProps.as,
      ...props
    },
    ref
  ) => {
    if (value > 100 || value < 0) {
      throw new Error("value는 0과 100을 포함하 사이값입니다.");
    }
    const classNames = combineClassNames(className, ratingStarStyles);
    return (
      <Component ref={ref} className={classNames} {...props}>
        <Icon name="star-filled" size={sizeMap.get(size)} color={gray[200]} />
        <Icon
          name="star-filled"
          size={sizeMap.get(size)}
          color={yellow[400]}
          clipPath={`inset(0 ${100 - value}% 0 0)`}
          className={ratingStarActiveStyles}
        />
      </Component>
    );
  }
);
