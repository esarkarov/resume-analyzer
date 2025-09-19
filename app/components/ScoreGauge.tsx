import { useRef } from "react";
import {
  DEFAULT_HEIGHT,
  DEFAULT_SCORE,
  DEFAULT_STROKE_WIDTH,
  DEFAULT_WIDTH,
  GAUGE_PATH,
  VIEWBOX_HEIGHT,
  VIEWBOX_WIDTH,
} from "~/constants/gauge";
import { usePathLength } from "~/hooks/usePathLength";

interface ScoreGaugeProps {
  score?: number;
  width?: number;
  height?: number;
  strokeWidth?: number;
  showLabel?: boolean;
}

const ScoreGauge = ({
  score = DEFAULT_SCORE,
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
  strokeWidth = DEFAULT_STROKE_WIDTH,
  showLabel = true,
}: ScoreGaugeProps) => {
  const pathRef = useRef<SVGPathElement>(null);
  const { pathLength } = usePathLength(pathRef);
  const clampedScore = Math.max(0, Math.min(100, score));
  const percentage = clampedScore / 100;
  const strokeDashoffset = pathLength * (1 - percentage);

  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width, height }}>
        <svg
          viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
          className="w-full h-full"
          role="img"
          aria-label={`Score gauge showing ${clampedScore} out of 100`}
        >
          <defs>
            <linearGradient
              id="gaugeGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#fca5a5" />
            </linearGradient>
          </defs>

          <path
            d={GAUGE_PATH}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />

          <path
            ref={pathRef}
            d={GAUGE_PATH}
            fill="none"
            stroke="url(#gaugeGradient)"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={pathLength || 0}
            strokeDashoffset={strokeDashoffset}
            style={{
              transition: "stroke-dashoffset 0.6s ease-out",
            }}
          />
        </svg>

        {showLabel && (
          <div className="absolute inset-0 flex items-center justify-center pt-2">
            <span className="text-xl font-semibold text-gray-800 mt-4">
              {clampedScore}/100
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScoreGauge;
