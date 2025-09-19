import type { ISuggestion } from "~/interfaces/ISuggestion";

interface SuggestionItemProps {
  suggestion: ISuggestion;
}

const SuggestionItem = ({ suggestion }: SuggestionItemProps) => {
  const isPositive = suggestion.type === "good";

  return (
    <div className="flex items-start gap-3">
      <img
        src={isPositive ? "/icons/check.svg" : "/icons/warning.svg"}
        alt={isPositive ? "Check" : "Warning"}
        className="w-5 h-5 mt-1"
      />
      <p className={isPositive ? "text-green-700" : "text-amber-700"}>
        {suggestion.tip}
      </p>
    </div>
  );
};

export default SuggestionItem;
