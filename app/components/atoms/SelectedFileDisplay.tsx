import { formatSize } from "~/utils";

interface SelectedFileDisplayProps {
  file: File;
  onRemove: () => void;
}

const SelectedFileDisplay = ({ file, onRemove }: SelectedFileDisplayProps) => (
  <div className="uploader-selected-file" onClick={(e) => e.stopPropagation()}>
    <img src="/images/pdf.png" alt="PDF file" className="size-10" />
    <div className="flex items-center space-x-3">
      <div>
        <p className="text-sm font-medium text-gray-700 truncate max-w-xs">
          {file.name}
        </p>
        <p className="text-sm text-gray-500">{formatSize(file.size)}</p>
      </div>
    </div>
    <button
      type="button"
      className="p-2 cursor-pointer"
      onClick={onRemove}
      aria-label="Remove file"
    >
      <img src="/icons/cross.svg" alt="Remove" className="w-4 h-4" />
    </button>
  </div>
);

export default SelectedFileDisplay;
