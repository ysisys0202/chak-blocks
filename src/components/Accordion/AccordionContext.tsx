import { createContext, useContext } from "react";

export type AccordionContextValues = {
  activeItems: string[];
  size: "sm" | "md" | "lg";
  onAccordionClick: (item: string) => void;
};

export const AccordionContext = createContext<AccordionContextValues>({
  activeItems: [] as string[],
  size: "md",
  onAccordionClick: (item) => {},
});

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("Accordion 컴포넌트 안에서 사용 가능합니다.");
  }
  return context;
};
