import { HTMLAttributes, forwardRef, ReactNode, ElementType } from "react";
import { combineClassNames } from "@/utils/common";
import { tagStyles } from "./style.css";

export type TagProps = {
  variant?: "outlined" | "contained";
  size?: "sm" | "md" | "lg";
  theme?: "primary" | "success" | "error" | "warning" | "light" | "dark";
  as?: ElementType;
  children: ReactNode;
} & HTMLAttributes<HTMLElement>;

export const defaultTagProps = {
  variant: "outliend" as TagProps["variant"],
  size: "md" as TagProps["size"],
  theme: "primary" as TagProps["theme"],
  as: "div",
};

export const Tag = forwardRef<HTMLElement, TagProps>(
  (
    {
      variant = defaultTagProps.variant,
      size = defaultTagProps.size,
      theme = defaultTagProps.theme,
      as: Component = defaultTagProps.as,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const classNames = combineClassNames(
      className,
      tagStyles({
        variant,
        theme,
        size,
      })
    );
    return (
      <Component ref={ref} className={classNames} {...props}>
        {children}
      </Component>
    );
  }
);
