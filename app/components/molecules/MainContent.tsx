import { RESUMES } from "~/constants/resumes";
import ScanSpinner from "../atoms/ScanSpinner";
import ResumeCard from "./ResumeCard";
import { Link } from "react-router";
import { PATHS } from "~/constants/paths";
import { useGetResumes } from "~/hooks/useGetResumes";

const MainContent = () => {
  const { resumes, isLoading } = useGetResumes();

  const hasResumes = !isLoading && resumes.length > 0;
  const isEmpty = !isLoading && resumes.length === 0;

  return (
    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Track Your Applications & Resume Ratings</h1>
        {hasResumes ? (
          <h2>Review your submissions and check AI-powered feedback.</h2>
        ) : (
          <h2>No resumes found. Upload your first resume to get feedback.</h2>
        )}
      </div>

      {isLoading && <ScanSpinner />}

      {hasResumes && (
        <div className="resumes-section">
          {RESUMES.map((resume) => (
            <ResumeCard key={resume.id} resume={resume} />
          ))}
        </div>
      )}

      {isEmpty && (
        <div className="flex flex-col items-center justify-center mt-10 gap-4">
          <Link
            to={PATHS.upload}
            className="primary-button w-fit text-xl font-semibold"
          >
            Upload Resume
          </Link>
        </div>
      )}
    </section>
  );
};

export default MainContent;
