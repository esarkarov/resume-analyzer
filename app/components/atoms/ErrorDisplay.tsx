import type { IErrorInfo } from "~/interfaces/IError";

const ErrorDisplay = ({ message, details, stack }: IErrorInfo) => (
  <main className="pt-16 p-4 container mx-auto">
    <h1 className="text-2xl font-bold mb-4">{message}</h1>
    <p className="text-lg mb-4">{details}</p>
    {stack && (
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Stack Trace:</h2>
        <pre className="w-full p-4 overflow-x-auto bg-gray-100 rounded-lg border">
          <code className="text-sm">{stack}</code>
        </pre>
      </div>
    )}
  </main>
);

export default ErrorDisplay;
