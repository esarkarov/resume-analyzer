import type { IFeedback } from "~/interfaces/IFeedback";
import FeedbackSummary from "../molecules/FeedbackSummary";
import FeedbackATS from "./FeedbackATS";
import FeedbackDetails from "./FeedbackDetails";

const FeedbackContent = ({ feedback }: { feedback: IFeedback }) => (
  <div className="flex flex-col gap-8 animate-in fade-in duration-1000">
    <FeedbackSummary feedback={feedback} />
    <FeedbackATS
      score={feedback.ATS?.score || 0}
      suggestions={feedback.ATS?.tips || []}
    />
    <FeedbackDetails feedback={feedback} />
  </div>
);

export default FeedbackContent;
