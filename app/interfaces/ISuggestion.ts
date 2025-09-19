import type { TFeedbackTipType } from "~/types";

export interface ISuggestion {
  type: TFeedbackTipType;
  tip: string;
}
