import { TIP_STYLES } from "~/constants/tips";
import TipIcon from "./TipIcon";
import { cn } from "~/utils";
import type { ITip } from "~/interfaces/ITip";

interface TipDetailProps {
  tip: ITip;
  index: number;
}

const TipDetail = ({ tip, index }: TipDetailProps) => {
  const styles = TIP_STYLES[tip.type as keyof typeof TIP_STYLES];

  return (
    <div
      className={cn("flex flex-col gap-2 rounded-2xl p-4", styles.container)}
      role="article"
      aria-labelledby={`tip-title-${index}`}
    >
      <div className="flex flex-row gap-2 items-center">
        <TipIcon type={tip.type} />
        <h3
          id={`tip-title-${index}`}
          className={cn("text-xl font-semibold", styles.title)}
        >
          {tip.tip}
        </h3>
      </div>
      <p className="leading-relaxed">{tip.explanation}</p>
    </div>
  );
};

export default TipDetail;
