import { HTMLAttributes, forwardRef, ReactNode, ElementType } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { typographyStyles, decorationStyles, textColor } from "./style.css";
import { combineClassNames } from "@/utils/common";

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
  theme?:
    | "primary"
    | "info"
    | "secondary"
    | "tertiary"
    | "success"
    | "error"
    | "warning"
    | "light";
  mark?: boolean;
  del?: boolean;
  strong?: boolean;
  italic?: boolean;
  color?: string;
  as?: ElementType;
  children: ReactNode;
} & HTMLAttributes<HTMLHeadingElement>;

export const defaultTypographyProps = {
  variant: "text1" as Exclude<TypographyProps["variant"], undefined>,
  theme: "primary" as Exclude<TypographyProps["theme"], undefined>,
  mark: false,
  del: false,
  strong: false,
  italic: false,
  as: "p",
};

const Typography = forwardRef<HTMLHeadingElement, TypographyProps>(
  (
    {
      variant = defaultTypographyProps.variant,
      theme = defaultTypographyProps.theme,
      mark = defaultTypographyProps.mark,
      del = defaultTypographyProps.del,
      strong = defaultTypographyProps.strong,
      italic = defaultTypographyProps.italic,
      as: Component = defaultTypographyProps.as,
      color,
      children,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const classNames = combineClassNames(
      className,
      typographyStyles({
        variant,
        theme,
      }),
      mark && decorationStyles.mark,
      del && decorationStyles.del,
      strong && decorationStyles.strong,
      italic && decorationStyles.italic
    );

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
