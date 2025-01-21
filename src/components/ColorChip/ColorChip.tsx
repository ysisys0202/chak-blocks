import { ElementType, forwardRef, HTMLAttributes } from "react";
import { combineClassNames } from "@/utils/common";
import { colorChipStyles, colorVar } from "./style.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";

export type ColorChipProps = {
  theme?: "primary" | "success" | "error" | "warning" | "light" | "dark";
  size?: "sm" | "md" | "lg";
  color?: string;
  as?: ElementType;
} & HTMLAttributes<HTMLElement>;

export const defaultColorChipProps = {
  theme: "primary" as ColorChipProps["theme"],
  size: "md" as ColorChipProps["size"],
  as: "div",
};

export const ColorChip = forwardRef<HTMLElement, ColorChipProps>(
  (
    {
      theme = defaultColorChipProps.theme,
      size = defaultColorChipProps.size,
      color,
      className,
      style,
      as: Component = defaultColorChipProps.as,
      ...props
    },
    ref
  ) => {
    const classNames = combineClassNames(
      className,
      colorChipStyles({ theme, size })
    );
    const styles = {
      ...(style ? style : {}),
      ...(color
        ? assignInlineVars({
            [colorVar]: color,
          })
        : {}),
    };
    return (
      <Component className={classNames} style={styles} ref={ref} {...props} />
    );
  }
);
