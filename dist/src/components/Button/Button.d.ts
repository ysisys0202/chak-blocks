import { ButtonHTMLAttributes, ReactNode, ElementType } from "react";
export type ButtonProps = {
    variant?: "outlined" | "contained" | "text";
    size?: "sm" | "md" | "lg";
    theme?: "primary" | "success" | "error" | "warning" | "light" | "dark";
    as?: ElementType;
    children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;
export declare const defaultButtonProps: {
    variant: ButtonProps["variant"];
    size: ButtonProps["size"];
    theme: ButtonProps["theme"];
    as: string;
};
declare const Button: import("react").ForwardRefExoticComponent<{
    variant?: "outlined" | "contained" | "text";
    size?: "sm" | "md" | "lg";
    theme?: "primary" | "success" | "error" | "warning" | "light" | "dark";
    as?: ElementType;
    children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement> & import("react").RefAttributes<HTMLButtonElement>>;
export default Button;
