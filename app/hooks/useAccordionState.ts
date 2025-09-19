import { useCallback, useMemo, useState } from "react";

export const useAccordionState = (
  defaultOpen?: string,
  allowMultiple = false
) => {
  const [activeItems, setActiveItems] = useState<Set<string>>(
    () => new Set(defaultOpen ? [defaultOpen] : [])
  );

  const toggleItem = useCallback(
    (id: string) => {
      setActiveItems((prevActiveItems) => {
        const newActiveItems = new Set(prevActiveItems);

        if (newActiveItems.has(id)) {
          newActiveItems.delete(id);
        } else {
          if (!allowMultiple) {
            newActiveItems.clear();
          }
          newActiveItems.add(id);
        }

        return newActiveItems;
      });
    },
    [allowMultiple]
  );

  const isItemActive = useCallback(
    (id: string) => activeItems.has(id),
    [activeItems]
  );

  return useMemo(
    () => ({ activeItems, toggleItem, isItemActive }),
    [activeItems, toggleItem, isItemActive]
  );
};
