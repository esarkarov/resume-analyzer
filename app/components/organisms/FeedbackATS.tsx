import useATSScore from "~/hooks/useATSScore";
import type { ISuggestion } from "~/interfaces/ISuggestion";
import FeedbackContent from "../molecules/FeedbackContent";
import FeedbackScoreHeader from "../atoms/FeedbackScoreHeader";

interface FeedbackATSProps {
  score: number;
  suggestions: ISuggestion[];
}

const FeedbackATS = ({ score, suggestions }: FeedbackATSProps) => {
  const { gradientClass, iconSrc, subtitle } = useATSScore(score);

  return (
    <div
      className={`bg-gradient-to-b ${gradientClass} to-white rounded-2xl shadow-md w-full p-6`}
    >
      <FeedbackScoreHeader score={score} iconSrc={iconSrc} />

      <FeedbackContent subtitle={subtitle} suggestions={suggestions} />

      <p className="text-gray-700 italic">
        Keep refining your resume to improve your chances of getting past ATS
        filters and into the hands of recruiters.
      </p>
    </div>
  );
};

export default FeedbackATS;
