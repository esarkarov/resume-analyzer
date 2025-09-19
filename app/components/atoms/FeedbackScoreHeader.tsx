interface FeedbackScoreHeaderProps {
  score: number;
  iconSrc: string;
}

const FeedbackScoreHeader = ({ score, iconSrc }: FeedbackScoreHeaderProps) => (
  <div className="flex items-center gap-4 mb-6">
    <img src={iconSrc} alt="ATS Score Icon" className="w-12 h-12" />
    <div>
      <h2 className="text-2xl font-bold">ATS Score - {score}/100</h2>
    </div>
  </div>
);

export default FeedbackScoreHeader;
