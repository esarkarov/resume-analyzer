import { cn, getBadgeTheme } from "~/utils";

interface CategoryScoreBadgeProps {
  score: number;
}

const CategoryScoreBadge = ({ score }: CategoryScoreBadgeProps) => {
  const clampedScore = Math.max(0, Math.min(100, score));
  const { bgColor, textColor, icon } = getBadgeTheme(clampedScore);

  return (
    <div
      className={cn(
        "flex flex-row gap-1 items-center px-2 py-0.5 rounded-[96px]",
        bgColor
      )}
      role="status"
      aria-label={`Score: ${clampedScore} out of 100`}
    >
      <img src={icon} alt="" className="size-4" aria-hidden="true" />
      <p className={cn("text-sm font-medium", textColor)}>{clampedScore}/100</p>
    </div>
  );
};

export default CategoryScoreBadge;
