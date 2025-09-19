import { TIP_ICONS } from "~/constants/tips";
import type { TFeedbackTipType } from "~/types";

interface TipIconProps {
  type: TFeedbackTipType;
  className?: string;
}

const TipIcon = ({ type, className = "size-5" }: TipIconProps) => (
  <img
    src={TIP_ICONS[type as keyof typeof TIP_ICONS]}
    alt={`${type} icon`}
    className={className}
    aria-hidden="true"
  />
);

export default TipIcon;
