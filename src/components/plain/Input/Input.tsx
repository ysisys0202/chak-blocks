import { forwardRef, InputHTMLAttributes, useState } from "react";
import { combineClassNames } from "@/utils/common";
import { inputStyles } from "./style.css";

export type InputProps = {
  inputSize?: "sm" | "md" | "lg";
  theme?: "primary" | "active" | "success" | "error" | "warning";
  placeholder?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const defaultInputProps = {
  inputSize: "md" as Exclude<InputProps["inputSize"], undefined>,
  theme: "primary" as InputProps["theme"],
  placeholder: "값을 입력해주세요.",
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      inputSize = defaultInputProps.inputSize,
      theme = defaultInputProps.theme,
      placeholder = defaultInputProps.placeholder,
      className,
      ...props
    },
    ref
  ) => {
    const classNames = combineClassNames(
      className,
      inputStyles({
        theme,
        size: inputSize,
      })
    );

    return (
      <input
        ref={ref}
        className={classNames}
        placeholder={placeholder}
        {...props}
      />
    );
  }
);
