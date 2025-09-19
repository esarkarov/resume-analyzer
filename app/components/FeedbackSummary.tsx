import { SUMMARY_CATEGORIES } from "~/constants/categories";
import type { IFeedback } from "~/interfaces/IFeedback";
import Category from "./Category";
import SummaryScoreHeader from "./SummaryScoreHeader";

interface FeedbackSummaryProps {
  feedback: IFeedback;
}

const FeedbackSummary = ({ feedback }: FeedbackSummaryProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-md w-full">
      <SummaryScoreHeader overallScore={feedback.overallScore} />

      {SUMMARY_CATEGORIES.map(({ key, title }) => (
        <Category key={key} title={title} score={feedback[key].score} />
      ))}
    </div>
  );
};

export default FeedbackSummary;
