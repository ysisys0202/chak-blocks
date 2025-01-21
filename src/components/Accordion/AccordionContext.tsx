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

export const useAccordionContext = () => useContext(AccordionContext);
