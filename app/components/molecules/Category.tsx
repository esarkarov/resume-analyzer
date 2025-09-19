import { getScoreTextColor } from "~/utils";
import ScoreBadge from "../atoms/ScoreBadge";

interface CategoryProps {
  title: string;
  score: number;
}

const Category = ({ title, score }: CategoryProps) => {
  const textColor = getScoreTextColor(score);

  return (
    <div className="resume-summary">
      <div className="category">
        <div className="flex flex-row gap-2 items-center justify-center">
          <p className="text-2xl font-medium">{title}</p>
          <ScoreBadge score={score} />
        </div>
        <p className="text-2xl font-semibold">
          <span className={textColor}>{score}</span>
          <span className="text-gray-400">/100</span>
        </p>
      </div>
    </div>
  );
};

export default Category;
