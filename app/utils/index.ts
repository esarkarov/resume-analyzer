import { CIRCLE_VIEWBOX_SIZE } from "~/constants/circle";
import type { ICircleGeometry } from "~/interfaces/ICircle";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { IBadgeConfig, IBadgeTheme } from "~/interfaces/IBadge";
import { isRouteErrorResponse } from "react-router";
import type { IErrorInfo } from "~/interfaces/IError";
import type { IScoreConfig } from "~/interfaces/IScore";

export const generateUUID = () => crypto.randomUUID();

export const getPuter = (): typeof window.puter | null =>
  typeof window !== "undefined" && window.puter ? window.puter : null;

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function formatSize(bytes: number): string {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

export const getScoreBadgeConfig = (score: number): IBadgeConfig => {
  if (score > 70) {
    return {
      color: "bg-badge-green text-green-600",
      text: "Strong",
    };
  }

  if (score > 49) {
    return {
      color: "bg-badge-yellow text-yellow-600",
      text: "Good Start",
    };
  }

  return {
    color: "bg-badge-red text-red-600",
    text: "Needs Work",
  };
};

export const getATSScoreConfig = (score: number): IScoreConfig => {
  if (score > 69) {
    return {
      gradientClass: "from-green-100",
      iconSrc: "/icons/ats-good.svg",
      subtitle: "Great Job!",
    };
  }

  if (score > 49) {
    return {
      gradientClass: "from-yellow-100",
      iconSrc: "/icons/ats-warning.svg",
      subtitle: "Good Start",
    };
  }

  return {
    gradientClass: "from-red-100",
    iconSrc: "/icons/ats-bad.svg",
    subtitle: "Needs Improvement",
  };
};

export const getScoreTextColor = (score: number): string => {
  if (score > 70) return "text-green-600";
  if (score > 49) return "text-yellow-600";
  return "text-red-600";
};

export const getBadgeTheme = (score: number): IBadgeTheme => {
  if (score > 69) {
    return {
      bgColor: "bg-badge-green",
      textColor: "text-badge-green-text",
      icon: "/icons/check.svg",
    };
  }

  if (score > 39) {
    return {
      bgColor: "bg-badge-yellow",
      textColor: "text-badge-yellow-text",
      icon: "/icons/warning.svg",
    };
  }

  return {
    bgColor: "bg-badge-red",
    textColor: "text-badge-red-text",
    icon: "/icons/warning.svg",
  };
};

export const calculateCircleGeometry = (
  score: number,
  strokeWidth: number
): ICircleGeometry => {
  const radius = (CIRCLE_VIEWBOX_SIZE - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.max(0, Math.min(100, score)) / 100;
  const strokeDashoffset = circumference * (1 - progress);

  return {
    radius,
    circumference,
    strokeDashoffset,
  };
};

export const getErrorInfo = (error: unknown): IErrorInfo => {
  const defaultError = {
    message: "Oops!",
    details: "An unexpected error occurred.",
  };

  if (isRouteErrorResponse(error)) {
    return {
      message: error.status === 404 ? "404" : "Error",
      details:
        error.status === 404
          ? "The requested page could not be found."
          : error.statusText || defaultError.details,
    };
  }

  if (import.meta.env.DEV && error instanceof Error) {
    return {
      message: defaultError.message,
      details: error.message,
      stack: error.stack,
    };
  }

  return defaultError;
};

export const AIResponseFormat = `
      interface Feedback {
      overallScore: number; //max 100
      ATS: {
        score: number; //rate based on ATS suitability
        tips: {
          type: "good" | "improve";
          tip: string; //give 3-4 tips
        }[];
      };
      toneAndStyle: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
      content: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
      structure: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
      skills: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
    }`;

export const prepareInstructions = ({
  jobTitle,
  jobDescription,
}: {
  jobTitle: string;
  jobDescription: string;
}) =>
  `You are an expert in ATS (Applicant Tracking System) and resume analysis.
      Please analyze and rate this resume and suggest how to improve it.
      The rating can be low if the resume is bad.
      Be thorough and detailed. Don't be afraid to point out any mistakes or areas for improvement.
      If there is a lot to improve, don't hesitate to give low scores. This is to help the user to improve their resume.
      If available, use the job description for the job user is applying to to give more detailed feedback.
      If provided, take the job description into consideration.
      The job title is: ${jobTitle}
      The job description is: ${jobDescription}
      Provide the feedback using the following format:
      ${AIResponseFormat}
      Return the analysis as an JSON object, without any other text and without the backticks.
      Do not include any other text or comments.`;
