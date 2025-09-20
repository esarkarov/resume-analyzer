import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import ResumeNav from "~/components/atoms/ResumeNav";
import ResumePreview from "~/components/atoms/ResumePreview";
import FeedbackSection from "~/components/organisms/FeedbackSection";
import { useResumeData } from "~/hooks/useResumeData";
import { usePuterStore } from "~/lib/puter";

export const meta = () => [
  { title: "Resumind | Review " },
  { name: "description", content: "Detailed overview of your resume" },
];

const Resume = () => {
  const { auth, isLoading } = usePuterStore();
  const { id } = useParams();
  const { imageUrl, resumeUrl, feedback, isFeedbackLoading, error, refetch } = useResumeData(id);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !auth.isAuthenticated)
      navigate(`/auth?next=/resume/${id}`);
  }, [isLoading]);

  return (
    <main className="!pt-0">
      <ResumeNav />
      <div className="flex flex-row w-full max-lg:flex-col-reverse">
        <ResumePreview imageUrl={imageUrl} resumeUrl={resumeUrl} />

        <FeedbackSection
          feedback={feedback}
          isLoading={isFeedbackLoading}
          error={error}
          onRetry={refetch}
        />
      </div>
    </main>
  );
};

export default Resume;
