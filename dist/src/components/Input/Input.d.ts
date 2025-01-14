import { InputHTMLAttributes } from "react";
export type InputProps = {
    inputSize?: "sm" | "md" | "lg";
    theme?: "primary" | "active" | "success" | "error" | "warning";
    placeholder?: string;
} & InputHTMLAttributes<HTMLInputElement>;
export declare const defaultInputProps: {
    inputSize: Exclude<InputProps["inputSize"], undefined>;
    theme: InputProps["theme"];
    placeholder: string;
};
declare const Input: import("react").ForwardRefExoticComponent<{
    inputSize?: "sm" | "md" | "lg";
    theme?: "primary" | "active" | "success" | "error" | "warning";
    placeholder?: string;
} & InputHTMLAttributes<HTMLInputElement> & import("react").RefAttributes<HTMLInputElement>>;
export default Input;
