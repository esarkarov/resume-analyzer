import type { ITip } from "~/interfaces/ITip";
import TipIcon from "../atoms/TipIcon";

interface TipSummaryProps {
  tips: ITip[];
}

const TipSummary = ({ tips }: TipSummaryProps) => (
  <div className="bg-gray-50 w-full rounded-lg px-5 py-4 grid grid-cols-2 gap-4">
    {tips.map((tip, index) => (
      <div
        className="flex flex-row gap-2 items-center"
        key={`summary-${index}`}
      >
        <TipIcon type={tip.type} />
        <p className="text-xl text-gray-500">{tip.tip}</p>
      </div>
    ))}
  </div>
);

export default TipSummary;
