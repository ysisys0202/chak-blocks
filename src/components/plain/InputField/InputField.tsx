import { forwardRef, HTMLAttributes, ElementType } from "react";
import { Typography } from "@/components/plain/Typography";
import { combineClassNames } from "@/utils/common";
import { inputFieldStyles } from "./style.css";

export type InputFieldProps = {
  label: string;
  helperText?: string;
  errorText?: string;
  isRequired?: boolean;
  direction?: "horizontal" | "vertical";
  as?: ElementType;
} & HTMLAttributes<HTMLElement>;

export const InputField = forwardRef<HTMLElement, InputFieldProps>(
  (
    {
      label,
      helperText,
      errorText,
      isRequired = false,
      direction = "horizontal",
      as: Component = "div",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const classNames = combineClassNames(
      className,
      inputFieldStyles.self({ direction })
    );

    return (
      <Component className={classNames} ref={ref} {...props}>
        {label && (
          <Typography
            variant="text1"
            as="strong"
            className={inputFieldStyles.label({ direction })}
          >
            {label}
            {isRequired && (
              <Typography variant="text1" theme="error" as="span">
                *
              </Typography>
            )}
          </Typography>
        )}
        <div className={inputFieldStyles.inputArea}>
          {children}
          {(helperText || errorText) && (
            <div className={inputFieldStyles.textArea}>
              {helperText && (
                <Typography variant="text3" theme="tertiary">
                  {helperText}
                </Typography>
              )}
              {errorText && (
                <Typography variant="text3" theme="error">
                  {errorText}
                </Typography>
              )}
            </div>
          )}
        </div>
      </Component>
    );
  }
);
