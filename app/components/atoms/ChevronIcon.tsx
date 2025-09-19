import { cn } from "~/utils";

interface ChevronIconProps {
  isActive: boolean;
}

const ChevronIcon = ({ isActive }: ChevronIconProps) => (
  <svg
    className={cn("w-5 h-5 transition-transform duration-200", {
      "rotate-180": isActive,
    })}
    fill="none"
    stroke="#98A2B3"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

export default ChevronIcon;
