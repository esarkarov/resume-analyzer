import TipSummary from "./TipSummary";
import TipDetail from "./TipDetail";
import type { ITip } from "~/interfaces/ITip";

interface CategoryContentProps {
  tips: ITip[];
}

const CategoryContent = ({ tips }: CategoryContentProps) => {
  if (!tips.length) {
    return (
      <div className="text-center py-8 text-gray-500">
        No feedback available for this category.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 items-center w-full">
      <TipSummary tips={tips} />

      <div className="flex flex-col gap-4 w-full">
        {tips.map((tip, index) => (
          <TipDetail
            key={`detail-${index}-${tip.tip.slice(0, 20)}`}
            tip={tip}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryContent;
