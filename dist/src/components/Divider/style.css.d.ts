export declare const backgroundColorVar: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
export declare const sizeVar: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
export declare const dividerStyles: import("@vanilla-extract/recipes").RuntimeFn<{
    direction: {
        horizontal: {
            width: string;
            height: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        vertical: string;
    };
    theme: {
        primary: string;
        secondary: string;
        tertiary: string;
        info: string;
        success: string;
        error: string;
        warning: string;
        light: string;
    };
}>;
