import type { ICategory } from "~/interfaces/ICategory";
import { AccordionContent } from "./AccordionContent";
import AccordionHeader from "./AccordionHeader";
import { AccordionItem } from "./AccordionItem";
import CategoryContent from "./CategoryContent";
import CategoryHeader from "./CategoryHeader";
import type { ITip } from "~/interfaces/ITip";

interface DetailItemProps {
  category: ICategory;
  score: number;
  tips: ITip[];
}

const DetailItem = ({ category, score, tips }: DetailItemProps) => (
  <AccordionItem id={category.id}>
    <AccordionHeader itemId={category.id}>
      <CategoryHeader title={category.title} categoryScore={score} />
    </AccordionHeader>
    <AccordionContent itemId={category.id}>
      <CategoryContent tips={tips} />
    </AccordionContent>
  </AccordionItem>
);

export default DetailItem;
