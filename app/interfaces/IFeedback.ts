import type { ITip } from "./ITip";

export interface IFeedbackCategory {
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
