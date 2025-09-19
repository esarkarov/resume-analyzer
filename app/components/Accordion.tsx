import type { ReactNode } from "react";
import { AccordionContext } from "~/contexts/AccordionContext";
import { useAccordionState } from "~/hooks/useAccordionState";
import { cn } from "~/utils";

interface AccordionProps {
  children: ReactNode;
  defaultOpen?: string;
  allowMultiple?: boolean;
  className?: string;
}

export const Accordion = ({
  children,
  defaultOpen,
  allowMultiple = false,
  className = "",
}: AccordionProps) => {
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
