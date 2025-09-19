import { useState, useEffect } from "react";

export const usePathLength = (
  pathRef: React.RefObject<SVGPathElement | null>
) => {
  const [pathLength, setPathLength] = useState<number>(0);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      setPathLength(length);
    }
  }, []);

  return { pathLength };
};
