import { DETAILS_CATEGORIES } from "~/constants/categories";
import { AccordionProvider } from "~/contexts/AccordionContext";
import type { IFeedback } from "~/interfaces/IFeedback";
import DetailItem from "./DetailItem";

interface FeedbackDetailsProps {
  feedback: IFeedback;
}

const FeedbackDetails = ({ feedback }: FeedbackDetailsProps) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <AccordionProvider>
        {DETAILS_CATEGORIES.map((category) => (
          <DetailItem
            key={category.id}
            category={category}
            score={feedback[category.key].score}
            tips={feedback[category.key].tips}
          />
        ))}
      </AccordionProvider>
    </div>
  );
};

export default FeedbackDetails;
