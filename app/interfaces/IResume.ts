import type { IFeedback } from "./IFeedback";

export interface IResume {
  id: string;
  companyName?: string;
  jobTitle?: string;
  imagePath: string;
  resumePath: string;
  feedback: IFeedback;
}

export interface IResumeData {
  resumePath: string;
  imagePath: string;
  feedback: IFeedback;
}

export interface IResumeState {
  imageUrl: string;
  resumeUrl: string;
  feedback: IFeedback | null;
  isFeedbackLoading: boolean;
  error: string | null;
}
