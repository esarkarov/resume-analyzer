import { useCallback, type ReactNode } from "react";
import { useAccordion } from "~/contexts/AccordionContext";
import type { TIconPosition } from "~/types";
import ChevronIcon from "../atoms/ChevronIcon";

interface AccordionHeaderProps {
  itemId: string;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  iconPosition?: TIconPosition;
}

export const AccordionHeader = ({
  itemId,
  children,
  className = "",
  icon,
  iconPosition = "right",
}: AccordionHeaderProps) => {
  const { toggleItem, isItemActive } = useAccordion();
  const isActive = isItemActive(itemId);

  const handleToggle = useCallback(() => {
    toggleItem(itemId);
  }, [toggleItem, itemId]);

  const displayIcon = icon ?? <ChevronIcon isActive={isActive} />;

  const headerContent = (
    <>
      <div className="flex items-center space-x-3">
        {iconPosition === "left" && displayIcon}
        <div className="flex-1">{children}</div>
      </div>
      {iconPosition === "right" && displayIcon}
    </>
  );
  return (
    <button
      onClick={handleToggle}
      className={`
        w-full px-4 py-3 text-left
        focus:outline-none
        transition-colors duration-200 flex items-center justify-between cursor-pointer
        ${className}
      `}
    >
      {headerContent}
    </button>
  );
};

export default AccordionHeader;
