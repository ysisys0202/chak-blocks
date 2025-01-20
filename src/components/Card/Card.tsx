import { HTMLAttributes, forwardRef, ElementType } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { borderColorVar, cardStyles, colorVar } from "./style.css";
import { combineClassNames } from "@/utils/common";
import { gray, white } from "@/constants/colors";

export type CardProps = {
  variant?: "elevated" | "filled" | "outlined";
  color?: string;
  borderColor?: string;
  rounded?: boolean;
  children: React.ReactNode;
  as?: ElementType;
} & HTMLAttributes<HTMLElement>;

export const defaultCardProps = {
  variant: "elevated" as CardProps["variant"],
  color: white,
  borderColor: gray[200],
  rounded: false,
  as: "article",
};

export const Card = forwardRef<HTMLElement, CardProps>(
  (
    {
      variant = defaultCardProps.variant,
      color = defaultCardProps.color,
      borderColor = defaultCardProps.borderColor,
      rounded = defaultCardProps.rounded,
      as: Component = defaultCardProps.as,
      className,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const classNames = combineClassNames(
      className,
      cardStyles({ variant, rounded })
    );

    const styles = {
      ...(style || {}),
      ...assignInlineVars({ [colorVar]: color }),
      ...assignInlineVars({ [borderColorVar]: borderColor }),
    };

    return (
      <Component ref={ref} className={classNames} style={styles} {...props}>
        {children}
      </Component>
    );
  }
);
