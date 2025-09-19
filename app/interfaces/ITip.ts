import type { TFeedbackTipType } from "~/types";

export interface ITip {
  type: TFeedbackTipType;
  tip: string;
  explanation?: string;
}
