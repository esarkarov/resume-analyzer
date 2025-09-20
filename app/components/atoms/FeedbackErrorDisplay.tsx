interface FeedbackErrorDisplayProps {
  error: string;
  onRetry: () => void;
}

const FeedbackErrorDisplay = ({
  error,
  onRetry,
}: FeedbackErrorDisplayProps) => (
  <div className="flex flex-col items-center justify-center gap-4 p-8">
    <p className="text-red-600 text-lg font-medium">{error}</p>
    <button onClick={onRetry} className="primary-button px-6 py-2">
      Try Again
    </button>
  </div>
);

export default FeedbackErrorDisplay;
