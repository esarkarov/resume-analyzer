import type { IFeedback } from "./IFeedback";

export interface ICategory {
  id: string;
  title: string;
  key: keyof Pick<
    IFeedback,
    "toneAndStyle" | "content" | "structure" | "skills"
  >;
}
