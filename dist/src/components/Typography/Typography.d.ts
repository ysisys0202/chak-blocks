import { HTMLAttributes, ReactNode, ElementType } from "react";
export type TypographyProps = {
    variant?: "title1" | "title2" | "title3" | "title4" | "title5" | "text1" | "text2" | "text3";
    theme?: "primary" | "info" | "secondary" | "tertiary" | "success" | "error" | "warning" | "light";
    mark?: boolean;
    del?: boolean;
    strong?: boolean;
    italic?: boolean;
    color?: string;
    as?: ElementType;
    children: ReactNode;
} & HTMLAttributes<HTMLHeadingElement>;
export declare const defaultTypographyProps: {
    variant: Exclude<TypographyProps["variant"], undefined>;
    theme: Exclude<TypographyProps["theme"], undefined>;
    mark: boolean;
    del: boolean;
    strong: boolean;
    italic: boolean;
    as: string;
};
declare const Typography: import("react").ForwardRefExoticComponent<{
    variant?: "title1" | "title2" | "title3" | "title4" | "title5" | "text1" | "text2" | "text3";
    theme?: "primary" | "info" | "secondary" | "tertiary" | "success" | "error" | "warning" | "light";
    mark?: boolean;
    del?: boolean;
    strong?: boolean;
    italic?: boolean;
    color?: string;
    as?: ElementType;
    children: ReactNode;
} & HTMLAttributes<HTMLHeadingElement> & import("react").RefAttributes<HTMLHeadingElement>>;
export default Typography;
