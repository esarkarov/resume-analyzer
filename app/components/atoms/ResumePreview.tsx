interface ResumePreviewProps {
  imageUrl: string;
  resumeUrl: string;
}

const ResumePreview = ({ imageUrl, resumeUrl }: ResumePreviewProps) => {
  const hasContent = imageUrl && resumeUrl;

  if (!hasContent) return null;

  return (
    <section className="feedback-section bg-[url('/images/bg-small.svg')] bg-cover h-[100vh] sticky top-0 items-center justify-center">
      <div className="animate-in fade-in duration-1000 gradient-border max-sm:m-0 h-[90%] max-wxl:h-fit w-fit">
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open resume PDF in new tab"
        >
          <img
            src={imageUrl}
            alt="Resume preview"
            className="w-full h-full object-contain rounded-2xl"
            title="Click to view full resume PDF"
          />
        </a>
      </div>
    </section>
  );
};

export default ResumePreview;
