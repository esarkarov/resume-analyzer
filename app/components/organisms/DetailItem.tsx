import type { ICategory } from "~/interfaces/ICategory";
import { AccordionContent } from "../atoms/AccordionContent";
import AccordionHeader from "../molecules/AccordionHeader";
import { AccordionItem } from "../atoms/AccordionItem";
import CategoryContent from "../molecules/CategoryContent";
import CategoryHeader from "../molecules/CategoryHeader";
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
