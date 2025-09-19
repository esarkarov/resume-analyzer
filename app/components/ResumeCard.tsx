import { Link } from "react-router";
import { PATHS } from "~/constants/paths";
import type { IResume } from "~/interfaces/IResume";
import ResumeHeader from "./ResumeHeader";
import ResumeImage from "./ResumeImage";

interface ResumeCardProps {
  resume: IResume;
}

const ResumeCard = ({ resume }: ResumeCardProps) => {
  const { id, companyName, jobTitle, feedback, imagePath } = resume;

  return (
    <Link
      to={PATHS.resume(id)}
      className="resume-card animate-in fade-in duration-1000"
    >
      <ResumeHeader
        companyName={companyName}
        jobTitle={jobTitle}
        overallScore={feedback.overallScore}
      />
      {imagePath && <ResumeImage imagePath={imagePath} />}
    </Link>
  );
};

export default ResumeCard;
