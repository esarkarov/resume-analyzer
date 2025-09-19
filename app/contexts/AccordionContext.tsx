import { createContext, useContext } from "react";

interface AccordionContextValue  {
  activeItems: string[];
  toggleItem: (id: string) => void;
  isItemActive: (id: string) => boolean;
}

export const AccordionContext = createContext<AccordionContextValue  | undefined>(
  undefined
);

export const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("Accordion components must be used within an Accordion");
  }
  return context;
};
