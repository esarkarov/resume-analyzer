import { useMemo } from "react";
import {
  CIRCLE_VIEWBOX_SIZE,
  DEFAULT_SCORE,
  DEFAULT_SIZE,
  DEFAULT_STROKE_WIDTH,
} from "~/constants/circle";
import { calculateCircleGeometry } from "~/utils";

interface ScoreCircleProps {
  score?: number;
  size?: number;
  strokeWidth?: number;
}

const ScoreCircle = ({
  score = DEFAULT_SCORE,
  size = DEFAULT_SIZE,
  strokeWidth = DEFAULT_STROKE_WIDTH,
}: ScoreCircleProps) => {
  const { radius, circumference, strokeDashoffset } = useMemo(
    () => calculateCircleGeometry(score, strokeWidth),
    [score, strokeWidth]
  );

  const centerPosition = CIRCLE_VIEWBOX_SIZE / 2;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg
        className="transform -rotate-90"
        width="100%"
        height="100%"
        viewBox={`0 0 ${CIRCLE_VIEWBOX_SIZE} ${CIRCLE_VIEWBOX_SIZE}`}
      >
        <circle
          cx={centerPosition}
          cy={centerPosition}
          r={radius}
          fill="transparent"
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
        />

        <defs>
          <linearGradient id="scoreGradient" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FF97AD" />
            <stop offset="100%" stopColor="#5171FF" />
          </linearGradient>
        </defs>

        <circle
          cx={centerPosition}
          cy={centerPosition}
          r={radius}
          fill="transparent"
          stroke="url(#scoreGradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{
            transition: "stroke-dashoffset 0.3s ease-in-out",
          }}
        />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-semibold text-sm text-gray-800">{score}/100</span>
      </div>
    </div>
  );
};

export default ScoreCircle;
