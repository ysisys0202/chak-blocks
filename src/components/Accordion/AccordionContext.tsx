import { createContext, useContext } from "react";

export type AccordionContextType = {
  activeItems: string[];
  size: "sm" | "md" | "lg";
  onAccordionClick: (item: string) => void;
};

export const AccordionContext = createContext<AccordionContextType>({
  activeItems: [] as string[],
  size: "md",
  onAccordionClick: (item) => {},
});

export const useAccordionContext = () => useContext(AccordionContext);
