import type { TFeedbackTipType } from "~/types";

interface ITip {
  type: TFeedbackTipType;
  tip: string;
  explanation?: string;
}

interface IFeedbackCategory {
  score: number;
  tips: ITip[];
}

export interface IFeedback {
  overallScore: number;
  ATS: IFeedbackCategory;
  toneAndStyle: IFeedbackCategory;
  content: IFeedbackCategory;
  structure: IFeedbackCategory;
  skills: IFeedbackCategory;
}

export interface IResume {
  id: string;
  companyName?: string;
  jobTitle?: string;
  imagePath: string;
  resumePath: string;
  feedback: IFeedback;
}
