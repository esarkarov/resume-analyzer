import { DETAILS_CATEGORIES } from "~/constants/categories";
import type { IFeedback } from "~/interfaces/IFeedback";
import { Accordion } from "./Accordion";
import DetailItem from "./DetailItem";

interface FeedbackDetailsProps {
  feedback: IFeedback;
}

const FeedbackDetails = ({ feedback }: FeedbackDetailsProps) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Accordion>
        {DETAILS_CATEGORIES.map((category) => (
          <DetailItem
            key={category.id}
            category={category}
            score={feedback[category.key].score}
            tips={feedback[category.key].tips}
          />
        ))}
      </Accordion>
    </div>
  );
};

export default FeedbackDetails;
