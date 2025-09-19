import type { TFeedbackTipType } from "~/types";

export interface ITip {
  type: TFeedbackTipType;
  tip: string;
  explanation?: string;
}

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
