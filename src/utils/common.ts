export const combineClassNames = (
  ...classes: (string | undefined | null | false)[]
): string => {
  return classes.filter(Boolean).join(" ");
};

export const convertAlphaToHex = (percent: number) => {
  if (percent < 0 || percent > 100) {
    throw new Error("0과 100을 포함한 사이값을 입력해주세요.");
  }
  const hex = Math.round((percent / 100) * 255).toString(16);
  return hex.padStart(2, "0");
};

export const hexWithAlpha = (hex: string, alpha: number) => {
  return `${hex}${convertAlphaToHex(alpha)}`;
};
