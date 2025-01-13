import { HTMLAttributes, forwardRef, ElementType } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { dividerStyles, backgroundColorVar, sizeVar } from "./style.css";
import { combineClassNames } from "@/utils/common";

export type DividerProps = {
  theme?:
    | "primary"
    | "info"
    | "secondary"
    | "tertiary"
    | "success"
    | "error"
    | "warning"
    | "light";
  direction?: "vertical" | "horizontal";
  color?: string;
  as?: ElementType;
  size?: string;
} & HTMLAttributes<HTMLElement>;

export const defaultDividerProps = {
  theme: "primary" as Exclude<DividerProps["theme"], undefined>,
  direction: "horizontal" as DividerProps["direction"],
  size: "1px",
  as: "hr",
};

const Divider = forwardRef<HTMLElement, DividerProps>(
  (
    {
      theme = defaultDividerProps.theme,
      direction = defaultDividerProps.direction,
      size = defaultDividerProps.size,
      as: Component = defaultDividerProps.as,
      color,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const classNames = combineClassNames(
      className,
      dividerStyles({
        direction,
        theme,
      })
    );

    const styles = {
      ...(style || {}),
      ...(color ? assignInlineVars({ [backgroundColorVar]: color }) : {}),
      ...(size ? assignInlineVars({ [sizeVar]: size }) : {}),
    };

    return (
      <Component ref={ref} className={classNames} style={styles} {...props} />
    );
  }
);

export default Divider;
