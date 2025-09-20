import { useState, useCallback, useEffect } from "react";
import type { IKVItem } from "~/interfaces/IPuter";
import type { IResume } from "~/interfaces/IResume";
import { usePuterStore } from "~/lib/puter";

export const useGetResumes = () => {
  const { kv } = usePuterStore();
  const [resumes, setResumes] = useState<IResume[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadResumes = useCallback(async () => {
    try {
      setIsLoading(true);

      const resumeData = (await kv.list("resume:*", true)) as IKVItem[];
      const parsedResumes =
        resumeData?.map((resume) => JSON.parse(resume.value) as IResume) || [];

      setResumes(parsedResumes);
    } catch (error) {
      console.error("Failed to load resumes:", error);
      setResumes([]);
    } finally {
      setIsLoading(false);
    }
  }, [kv]);

  useEffect(() => {
    loadResumes();
  }, [loadResumes]);

  return { resumes, isLoading, loadResumes };
};
