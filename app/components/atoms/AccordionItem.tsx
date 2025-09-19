import type { ReactNode } from "react";

interface AccordionItemProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export const AccordionItem = ({
  children,
  className = "",
}: AccordionItemProps) => {
  return (
    <div className={`overflow-hidden border-b border-gray-200 ${className}`}>
      {children}
    </div>
  );
};
