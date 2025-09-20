import { createContext, useContext, type ReactNode } from "react";
import { useAccordionState } from "~/hooks/useAccordionState";
import type {
  IAccordionContextType,
  IAccordionProviderParams,
} from "~/interfaces/IAccordion";
import { cn } from "~/utils";

export const AccordionContext = createContext<IAccordionContextType | undefined>(
  undefined
);

export const AccordionProvider = ({
  children,
  defaultOpen,
  allowMultiple = false,
  className = "",
}: IAccordionProviderParams) => {
  const accordionState = useAccordionState(defaultOpen, allowMultiple);

  return (
    <AccordionContext.Provider
      value={{
        ...accordionState,
        activeItems: Array.from(accordionState.activeItems),
      }}
    >
      <div className={cn("space-y-2", className)}>{children}</div>
    </AccordionContext.Provider>
  );
};

export const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("Accordion components must be used within an Accordion!");
  }
  return context;
};
