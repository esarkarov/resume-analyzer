import type { IFeedback } from "~/interfaces/IFeedback";
import ScanSpinner from "../atoms/ScanSpinner";
import FeedbackContent from "./FeedbackContent";
import FeedbackErrorDisplay from "../atoms/FeedbackErrorDisplay";

interface FeedbackContentProps {
  feedback: IFeedback | null;
  isLoading: boolean;
  error: string | null;
  onRetry: () => void;
}

const FeedbackSection = ({
  feedback,
  isLoading,
  error,
  onRetry,
}: FeedbackContentProps) => {
  const renderContent = () => {
    if (error) {
      return <FeedbackErrorDisplay error={error} onRetry={onRetry} />;
    }

    if (isLoading || !feedback) {
      return <ScanSpinner />;
    }

    return <FeedbackContent feedback={feedback} />;
  };

  return (
    <section className="feedback-section">
      <h2 className="text-4xl !text-black font-bold mb-8">Resume Review</h2>
      {renderContent()}
    </section>
  );
};

export default FeedbackSection;
