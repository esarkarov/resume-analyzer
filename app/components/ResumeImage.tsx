interface ResumeImageProps {
  imagePath: string;
  alt?: string;
}

const ResumeImage = ({
  imagePath,
  alt = "Resume preview",
}: ResumeImageProps) => (
  <div className="gradient-border animate-in fade-in duration-1000">
    <div className="w-full h-full">
      <img
        src={imagePath}
        alt={alt}
        className="w-full h-[350px] max-sm:h-[200px] object-cover object-top"
        loading="lazy"
      />
    </div>
  </div>
);

export default ResumeImage;
