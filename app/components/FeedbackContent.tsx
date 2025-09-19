import type { ISuggestion } from "~/interfaces/ISuggestion";
import SuggestionItem from "./SuggestionItem";

interface FeedbackContentProps {
  subtitle: string;
  suggestions: ISuggestion[];
}

const FeedbackContent = ({ subtitle, suggestions }: FeedbackContentProps) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold mb-2">{subtitle}</h3>
    <p className="text-gray-600 mb-4">
      This score represents how well your resume is likely to perform in
      Applicant Tracking Systems used by employers.
    </p>

    <div className="space-y-3">
      {suggestions.map((suggestion, index) => (
        <SuggestionItem key={index} suggestion={suggestion} />
      ))}
    </div>
  </div>
);

export default FeedbackContent;
