import type { IFeedback } from "./IFeedback";

export interface IResume {
  id: string;
  companyName?: string;
  jobTitle?: string;
  imagePath: string;
  resumePath: string;
  feedback: IFeedback;
}

