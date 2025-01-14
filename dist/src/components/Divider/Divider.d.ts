import { HTMLAttributes, ElementType } from "react";
export type DividerProps = {
    theme?: "primary" | "info" | "secondary" | "tertiary" | "success" | "error" | "warning" | "light";
    direction?: "vertical" | "horizontal";
    color?: string;
    as?: ElementType;
    size?: string;
} & HTMLAttributes<HTMLElement>;
export declare const defaultDividerProps: {
    theme: Exclude<DividerProps["theme"], undefined>;
    direction: DividerProps["direction"];
    size: string;
    as: string;
};
declare const Divider: import("react").ForwardRefExoticComponent<{
    theme?: "primary" | "info" | "secondary" | "tertiary" | "success" | "error" | "warning" | "light";
    direction?: "vertical" | "horizontal";
    color?: string;
    as?: ElementType;
    size?: string;
} & HTMLAttributes<HTMLElement> & import("react").RefAttributes<HTMLElement>>;
export default Divider;
