import { useMemo } from "react";
import type { IScore } from "~/interfaces/IScore";

const useATSScore = (score: number): IScore => {
  return useMemo(() => {
    if (score > 69) {
      return {
        gradientClass: "from-green-100",
        iconSrc: "/icons/ats-good.svg",
        subtitle: "Great Job!",
      };
    }

    if (score > 49) {
      return {
        gradientClass: "from-yellow-100",
        iconSrc: "/icons/ats-warning.svg",
        subtitle: "Good Start",
      };
    }

    return {
      gradientClass: "from-red-100",
      iconSrc: "/icons/ats-bad.svg",
      subtitle: "Needs Improvement",
    };
  }, [score]);
};

export default useATSScore;
