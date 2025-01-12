export const combineClassNames = (
  ...classes: (string | undefined | null)[]
): string => {
  return classes.filter(Boolean).join(" ");
};
