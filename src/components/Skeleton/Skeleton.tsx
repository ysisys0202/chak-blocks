import { ElementType, forwardRef, HTMLAttributes } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { combineClassNames } from "@/utils/common";
import { widthVar, heightVar, skeletonStyles } from "./style.css";

export type SkeletonProps = {
  width?: string;
  height?: string;
  variant?: "outlined" | "filled";
  as?: ElementType;
} & HTMLAttributes<HTMLElement>;

export const defaultSkeletonProps = {
  width: "100%",
  height: "100%",
  variant: "filled" as SkeletonProps["variant"],
  as: "div",
};

export const Skeleton = forwardRef<HTMLElement, SkeletonProps>(
  (
    {
      width = defaultSkeletonProps.width,
      height = defaultSkeletonProps.height,
      as: Component = defaultSkeletonProps.as,
      variant = defaultSkeletonProps.variant,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const classNames = combineClassNames(
      className,
      skeletonStyles({ variant })
    );
    const styles = {
      ...(style ? style : {}),
      ...assignInlineVars({
        [widthVar]: width,
        [heightVar]: height,
      }),
    };
    return (
      <Component className={classNames} style={styles} ref={ref} {...props} />
    );
  }
);
