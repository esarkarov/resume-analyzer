import { formatSize } from "~/utils";

interface EmptyStateProps {
  maxFileSize: number;
}

const EmptyUploadState = ({ maxFileSize }: EmptyStateProps) => (
  <div>
    <div className="mx-auto w-16 h-16 flex items-center justify-center mb-2">
      <img src="/icons/info.svg" alt="Upload" className="size-20" />
    </div>
    <p className="text-lg text-gray-500">
      <span className="font-semibold">Click to upload</span> or drag and drop
    </p>
    <p className="text-lg text-gray-500">PDF (max {formatSize(maxFileSize)})</p>
  </div>
);

export default EmptyUploadState;
