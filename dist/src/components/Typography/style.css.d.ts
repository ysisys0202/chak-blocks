export declare const textColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
export declare const variantStyles: {
    title1: {
        fontWeight: number;
        lineHeight: number;
        fontSize: number;
    };
    title2: {
        fontWeight: number;
        lineHeight: number;
        fontSize: number;
    };
    title3: {
        fontWeight: number;
        lineHeight: number;
        fontSize: number;
    };
    title4: {
        fontWeight: number;
        lineHeight: number;
        fontSize: number;
    };
    title5: {
        fontWeight: number;
        lineHeight: number;
        fontSize: number;
    };
    text1: {
        fontWeight: number;
        lineHeight: number;
        fontSize: number;
    };
    text2: {
        fontWeight: number;
        lineHeight: number;
        fontSize: number;
    };
    text3: {
        fontWeight: number;
        lineHeight: number;
        fontSize: number;
    };
};
export declare const decorationStyles: Record<"italic" | "mark" | "del" | "strong", string>;
export declare const typographyStyles: import("@vanilla-extract/recipes").RuntimeFn<{
    variant: {
        title1: {
            fontWeight: number;
            lineHeight: number;
            fontSize: number;
        };
        title2: {
            fontWeight: number;
            lineHeight: number;
            fontSize: number;
        };
        title3: {
            fontWeight: number;
            lineHeight: number;
            fontSize: number;
        };
        title4: {
            fontWeight: number;
            lineHeight: number;
            fontSize: number;
        };
        title5: {
            fontWeight: number;
            lineHeight: number;
            fontSize: number;
        };
        text1: {
            fontWeight: number;
            lineHeight: number;
            fontSize: number;
        };
        text2: {
            fontWeight: number;
            lineHeight: number;
            fontSize: number;
        };
        text3: {
            fontWeight: number;
            lineHeight: number;
            fontSize: number;
        };
    };
    theme: {
        primary: string[];
        secondary: string[];
        tertiary: string[];
        info: string[];
        success: string[];
        error: string[];
        warning: string[];
        light: string[];
    };
}>;
