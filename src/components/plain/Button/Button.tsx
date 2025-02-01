import {
  ButtonHTMLAttributes,
  forwardRef,
  ReactNode,
  ElementType,
} from "react";
import { combineClassNames } from "@/utils/common";
import { buttonStyles } from "./style.css";

export type ButtonProps = {
  variant?: "outlined" | "contained" | "text";
  size?: "sm" | "md" | "lg";
  theme?: "primary" | "success" | "error" | "warning" | "light" | "dark";
  as?: ElementType;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const defaultButtonProps = {
  variant: "contained" as ButtonProps["variant"],
  size: "md" as ButtonProps["size"],
  theme: "primary" as ButtonProps["theme"],
  as: "button",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = defaultButtonProps.variant,
      size = defaultButtonProps.size,
      theme = defaultButtonProps.theme,
      as: Component = defaultButtonProps.as,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const classNames = combineClassNames(
      className,
      buttonStyles({
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
