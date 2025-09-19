import ScoreCircle from "./ScoreCircle";

interface ResumeHeaderProps {
  companyName?: string;
  jobTitle?: string;
  overallScore: number;
}

const ResumeHeader = ({
  companyName,
  jobTitle,
  overallScore,
}: ResumeHeaderProps) => {
  const hasTitle = companyName || jobTitle;

  return (
    <div className="resume-card-header">
      <div className="flex flex-col gap-2">
        {companyName && (
          <h2 className="!text-black font-bold break-words">{companyName}</h2>
        )}
        {jobTitle && (
          <h3 className="text-lg break-words text-gray-500">{jobTitle}</h3>
        )}
        {!hasTitle && <h2 className="!text-black font-bold">Resume</h2>}
      </div>
      <div className="flex-shrink-0">
        <ScoreCircle score={overallScore} />
      </div>
    </div>
  );
};

export default ResumeHeader;
