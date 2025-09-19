import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { MAX_FILE_SIZE } from "~/constants/size";
import EmptyUploadState from "../atoms/EmptyUploadState";
import SelectedFileDisplay from "../atoms/SelectedFileDisplay";

interface FileUploaderProps {
  onFileSelect?: (file: File | null) => void;
}

const FileUploader = ({ onFileSelect }: FileUploaderProps) => {
  const handleFileDrop = useCallback(
    (acceptedFiles: File[]) => {
      const selectedFile = acceptedFiles[0] ?? null;
      onFileSelect?.(selectedFile);
    },
    [onFileSelect]
  );

  const handleFileRemove = useCallback(() => {
    onFileSelect?.(null);
  }, [onFileSelect]);

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    onDrop: handleFileDrop,
    multiple: false,
    accept: { "application/pdf": [".pdf"] },
    maxSize: MAX_FILE_SIZE,
  });

  const selectedFile = acceptedFiles[0] ?? null;

  return (
    <div className="w-full gradient-border">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <div className="space-y-4 cursor-pointer">
          {selectedFile ? (
            <SelectedFileDisplay
              file={selectedFile}
              onRemove={handleFileRemove}
            />
          ) : (
            <EmptyUploadState maxFileSize={MAX_FILE_SIZE} />
          )}
        </div>
      </div>
    </div>
  );
};
export default FileUploader;
