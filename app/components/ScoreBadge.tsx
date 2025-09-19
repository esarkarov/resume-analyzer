import { getScoreBadgeConfig } from "~/utils";
interface ScoreBadgeProps {
  score: number;
}

const ScoreBadge = ({ score }: ScoreBadgeProps) => {
  const { color, text } = getScoreBadgeConfig(score);

  return (
    <div className={`px-3 py-1 rounded-full ${color}`}>
      <p className="text-sm font-medium">{text}</p>
    </div>
  );
};

export default ScoreBadge;
