import ScoreGauge from "./ScoreGauge";

interface SummaryScoreHeaderProps {
  overallScore: number;
}

const SummaryScoreHeader = ({ overallScore }: SummaryScoreHeaderProps) => (
  <div className="flex flex-row items-center p-4 gap-8">
    <ScoreGauge score={overallScore} />
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-bold text-gray-900">Your Resume Score</h2>
      <p className="text-sm text-gray-500">
        This score is calculated based on the categories listed below.
      </p>
    </div>
  </div>
);

export default SummaryScoreHeader;
