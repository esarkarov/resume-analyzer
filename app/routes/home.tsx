import { Link, useNavigate } from "react-router";
import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import { RESUMES } from "~/constants/resumes";
import ResumeCard from "~/components/ResumeCard";
import { PATHS } from "~/constants/paths";
import { useEffect, useState } from "react";
import { usePuterStore } from "~/lib/puter";
import type { IResume } from "~/interfaces/IResume";
import type { IKVItem } from "~/interfaces/IPuter";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

const Home = () => {
  const { auth, kv } = usePuterStore();
  const navigate = useNavigate();
  const [resumes, setResumes] = useState<IResume[]>([]);
  const [loadingResumes, setLoadingResumes] = useState<boolean>(false);

  useEffect(() => {
    if (!auth.isAuthenticated) navigate("/auth?next=/");
  }, [auth.isAuthenticated]);

  useEffect(() => {
    const loadResumes = async () => {
      setLoadingResumes(true);

      const resumes = (await kv.list("resume:*", true)) as IKVItem[];

      const parsedResumes = resumes?.map(
        (resume) => JSON.parse(resume.value) as IResume
      );

      setResumes(parsedResumes || []);
      setLoadingResumes(false);
    };

    loadResumes();
  }, []);

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />

      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Track Your Applications & Resume Ratings</h1>
          {!loadingResumes && resumes?.length === 0 ? (
            <h2>No resumes found. Upload your first resume to get feedback.</h2>
          ) : (
            <h2>Review your submissions and check AI-powered feedback.</h2>
          )}
        </div>

        {loadingResumes && (
          <div className="flex flex-col items-center justify-center">
            <img src="/images/resume-scan-2.gif" className="w-[200px]" />
          </div>
        )}

        {!loadingResumes && resumes?.length > 0 && (
          <div className="resumes-section">
            {RESUMES.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}

        {!loadingResumes && resumes?.length === 0 && (
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
    </main>
  );
};

export default Home;
