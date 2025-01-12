import { HTMLAttributes, forwardRef, ReactNode, ElementType } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import typographyBase, { typography, textColor } from "./style.css";

export type TypographyProps = {
  variant?:
    | "title1"
    | "title2"
    | "title3"
    | "title4"
    | "title5"
    | "text1"
    | "text2"
    | "text3";
  type?: "primary" | "secondary" | "tertiary" | "success" | "error" | "warning";
  mark?: boolean;
  del?: boolean;
  strong?: boolean;
  italic?: boolean;
  color?: string;
  as?: ElementType;
  children: ReactNode;
} & HTMLAttributes<HTMLHeadingElement>;

export const typographyDefaultProps = {
  variant: "text1" as Exclude<TypographyProps["variant"], undefined>,
  type: "primary" as Exclude<TypographyProps["type"], undefined>,
  mark: false,
  del: false,
  strong: false,
  italic: false,
  as: "p",
};

const Typography = forwardRef<HTMLHeadingElement, TypographyProps>(
  (
    {
      variant = typographyDefaultProps.variant,
      type = typographyDefaultProps.type,
      mark = typographyDefaultProps.mark,
      del = typographyDefaultProps.del,
      strong = typographyDefaultProps.strong,
      italic = typographyDefaultProps.italic,
      as: Component = typographyDefaultProps.as,
      color,
      children,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const classNames = [
      className,
      typographyBase,
      typography[variant],
      type && typography[type],
      mark && typography.mark,
      del && typography.del,
      strong && typography.strong,
      italic && typography.italic,
    ]
      .filter(Boolean)
      .join(" ");

    const styles = {
      ...(style || {}),
      ...(color ? assignInlineVars({ [textColor]: color }) : {}),
    };

    return (
      <Component ref={ref} className={classNames} {...props} style={styles}>
        {children}
      </Component>
    );
  }
);

export default Typography;
