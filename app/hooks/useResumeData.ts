import { useCallback, useEffect, useState } from "react";
import type { IResumeData, IResumeState } from "~/interfaces/IResume";
import { usePuterStore } from "~/lib/puter";

export const useResumeData = (id: string | undefined) => {
  const { fs, kv } = usePuterStore();
  const [resumeState, setResumeState] = useState<IResumeState>({
    imageUrl: "",
    resumeUrl: "",
    feedback: null,
    isFeedbackLoading: true,
    error: null,
  });

  const createBlobUrl = useCallback((blob: Blob, mimeType: string): string => {
    const blobObject = new Blob([blob], { type: mimeType });
    return URL.createObjectURL(blobObject);
  }, []);

  const loadResumeFiles = useCallback(
    async (data: IResumeData) => {
      try {
        const resumeBlob = await fs.read(data.resumePath);
        if (!resumeBlob) throw new Error("Failed to load resume PDF");
        const resumeUrl = createBlobUrl(resumeBlob, "application/pdf");

        const imageBlob = await fs.read(data.imagePath);
        if (!imageBlob) throw new Error("Failed to load resume image");
        const imageUrl = createBlobUrl(imageBlob, "image/png");

        return { resumeUrl, imageUrl };
      } catch (error) {
        throw new Error(
          `Failed to load resume files: ${error instanceof Error ? error.message : "Unknown error"}`
        );
      }
    },
    [fs, createBlobUrl]
  );

  const loadResume = useCallback(async () => {
    if (!id) {
      setResumeState((prev) => ({
        ...prev,
        error: "Resume ID is required",
        isFeedbackLoading: false,
      }));
      return;
    }

    try {
      setResumeState((prev) => ({
        ...prev,
        isFeedbackLoading: true,
        error: null,
      }));

      const resumeData = await kv.get(`resume:${id}`);
      if (!resumeData) {
        throw new Error("Resume not found");
      }

      const parsedData: IResumeData = JSON.parse(resumeData);

      const { resumeUrl, imageUrl } = await loadResumeFiles(parsedData);

      setResumeState((prev) => ({
        ...prev,
        imageUrl,
        resumeUrl,
        feedback: parsedData.feedback,
        isFeedbackLoading: false,
      }));
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to load resume";
      setResumeState((prev) => ({
        ...prev,
        error: errorMessage,
        isFeedbackLoading: false,
      }));
      console.error("Resume loading error:", error);
    }
  }, [id, kv, loadResumeFiles]);

  useEffect(() => {
    loadResume();

    return () => {
      if (resumeState.resumeUrl) URL.revokeObjectURL(resumeState.resumeUrl);
      if (resumeState.imageUrl) URL.revokeObjectURL(resumeState.imageUrl);
    };
  }, [loadResume]);

  return { ...resumeState, refetch: loadResume };
};
