import { HTMLAttributes, ReactNode, ElementType } from "react";
export type TagProps = {
    variant?: "outlined" | "contained";
    size?: "sm" | "md" | "lg";
    theme?: "primary" | "success" | "error" | "warning" | "light" | "dark";
    as?: ElementType;
    children: ReactNode;
} & HTMLAttributes<HTMLElement>;
export declare const defaultTagProps: {
    variant: TagProps["variant"];
    size: TagProps["size"];
    theme: TagProps["theme"];
    as: string;
};
declare const Tag: import("react").ForwardRefExoticComponent<{
    variant?: "outlined" | "contained";
    size?: "sm" | "md" | "lg";
    theme?: "primary" | "success" | "error" | "warning" | "light" | "dark";
    as?: ElementType;
    children: ReactNode;
} & HTMLAttributes<HTMLElement> & import("react").RefAttributes<HTMLElement>>;
export default Tag;
